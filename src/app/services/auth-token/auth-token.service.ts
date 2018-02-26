import { Injectable } from '@angular/core';
import { Response, Headers, RequestOptions, Http } from '@angular/http';
import { JwtHelper } from 'angular2-jwt';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { ProfileModel } from '../../models/profile-model';
import { LoginModel } from '../../models/login.model';
import { RefreshGrantModel } from '../../models/refresh-grant-model';
import { AuthTokenModel } from '../../models/auth-tokens.model';
import 'rxjs/add/operator/toPromise';
import 'rxjs/Subject';
import 'rxjs/BehaviorSubject';
import 'rxjs/Observable';
import { URL_LOGIN} from  '../../constants/url';
import { ApplicationService } from '../application/application.service';
import { DataService } from '../data-service/data.service';
import { SettingsService } from '../settings/settings.service';
import { configTokenPost} from '../../constants/config';
import { UserService } from '../../services/users/user.service';
import { Store} from '@ngrx/store';
import { AppState } from '../../state/app.state';
import * as AuthAction from '../../state/authState.actions';
import * as UserActions from '../../state/userservice.actions';
import { AuthTokenModel} from '../../models/auth-tokens.model';

@Injectable()
export class AuthTokenService {
    public refreshSubscription$: Subscription;
    public jwtHelper: JwtHelper = new JwtHelper();
    public isUserExternalLoggin : boolean = false;

    //config for post token
    private configAPi = configTokenPost;

    constructor(
        private http: Http,
        private applicationService : ApplicationService,
        private dataService : DataService,
        private settingsService :SettingsService,
        private userService : UserService,
        private store :Store<AppState>
    ) { }

    public getTokens(data: LoginModel | RefreshGrantModel, grantType: string): Observable<any> {
        // data can be any since it can either be a refresh tokens or login details
        // The request for tokens must be x-www-form-urlencoded
        const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        //headers.append('Accept','application/json');
        const options = new RequestOptions({ headers });

        Object.assign(data, {
            grant_type: this.configAPi.grant_type,
            // offline_access is required for a refresh token
            scope: this.configAPi.scope,
            //client_secret: this.configAPi.client_secret,
            client_id: this.configAPi.client_id         
        });

       
        return this.http.post(URL_LOGIN,this.encodeObjectToParams(data), options)  
        .map(res => res.json())
        .flatMap((tokens: AuthTokenModel) => {
               const now = new Date();
                tokens.expiration_date = new Date(now.getTime() + (tokens.expires_in ? (tokens.expires_in * 1000) : 0)).getTime().toString();

                this.applicationService.authTokensSubscription$.next(tokens);

                let tokenModel : AuthTokenModel  = {
                    access_token : tokens.access_token,
                    token_type : tokens.token_type,
                    expiration_date : tokens.expiration_date,
                    id_token : "",
                    expires_in : tokens.expires_in,
                    refresh_token : ""
                };

                const profile = this.jwtHelper.decodeToken(tokens.access_token) as ProfileModel;
                localStorage.setItem('auth-tokens', JSON.stringify(tokens.access_token));
                this.applicationService.userProfileSubscription$.next(profile);
                this.store.dispatch(new UserActions.LoadUserName(profile['name']));

                this.store.dispatch(new AuthAction.LoadAllTokenInfoIntoStore(tokenModel));
                //this.userService.userRoleSubscription$.next(profile.role);
                this.applicationService.profileUserContainer$.next(profile);
                this.applicationService.tokenSubscription$.next(tokens.access_token);  
                this.applicationService.isUserloggedSubscription$.next(true);                       

                //subscribe the time zone 
                this.applicationService.expirationDate$.next(tokens.expiration_date);

                return Observable.of(tokens);
        });

    }

    public deleteTokens() {
        localStorage.removeItem('auth-tokens');
    }

    public unsubscribeRefresh() {
        if (this.refreshSubscription$) {
            this.refreshSubscription$.unsubscribe();
        }
    }

    /**
     * Subscribe External Login from Azure into
     * Store
     */
    public storeAzureADDTokenInStore(tokens : any)
    {   
        this.dataService.isUserExternalLoggin = true;   
        this.dataService.isInternalLogin = false;    
         //store user external login
    
        const profile = (tokens.profile) as ProfileModel;
        this.applicationService.profileUserContainer$.next(profile);
           
        
        localStorage.setItem('auth-tokens', tokens.token);        
       
    }

    public refreshTokens(): Observable<Response> {
        return this.applicationService.tokenSubscription$
            .flatMap((tokens: any) => {
                return this.getTokens({ refresh_token: tokens.refresh_token }, 'refresh_token')
                    // This should only happen if the refresh token has expired
                    .catch((error: any) => {
                        // let the app know that we cant refresh the token
                        // which means something is invalid and they aren't logged in
                       
                        return Observable.throw('Session Expired');
                    });
            });
    }

    public startupTokenRefresh() {
        const tokensString = localStorage.getItem('auth-tokens');
        const tokensModel = tokensString === null ? null : JSON.parse(tokensString);
        return Observable.of(tokensModel)
            .flatMap(tokens => {
                // check if the token is even if localStorage, if it isn't tell them it's not and return
                if (!tokens) {
                   
                    return Observable.throw('No token in Storage');
                }
               this.applicationService.authTokensSubscription$.next(tokens);

                // the "+" below is to convert "tokens.expiration_date" to a number so we can compare
                if (+tokens.expiration_date > new Date().getTime()) {
                    // grab the profile out so we can store it
                    const profile: ProfileModel = this.jwtHelper.decodeToken(tokens.id_token);
                    this.applicationService.profileUserContainer$.next(profile);

                    this.applicationService.isUserloggedSubscription$.next(true);
                }

                return this.refreshTokens()
                    .map(() => {
                        this.scheduleRefresh();
                    });
            })
            .catch(error => {
                this.applicationService.isUserloggedSubscription$.next(false);
                return Observable.throw(error);
            });
    }

    public scheduleRefresh(): void {
        const source = this.applicationService.tokenSubscription$
            .take(1)
            .flatMap((tokens: AuthTokenModel) => {
                // the interval is how long inbetween token refreshes
                // here we are taking half of the time it takes to expired
                // you may want to change how this time interval is calculated
                const interval = tokens.expires_in ? (tokens.expires_in / 2 * 1000) : 0;
                return Observable.interval(interval);
            });

        this.refreshSubscription$ = source.subscribe(() => {
            this.refreshTokens()
                .subscribe();
        });
    }

    private encodeObjectToParams(obj: any): string {
        return Object.keys(obj)
            .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]))
            .join('&');
    }

}
