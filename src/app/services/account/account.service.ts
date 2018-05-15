
import {throwError as observableThrowError,  Subscription ,  Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { RegisterModel } from '../../models/register-model';
import { LoginModel } from '../../models/login.model';
import { AuthTokenService } from '../auth-token/auth-token.service';
import { UtilityService } from '../utility/utility.service';
import { DataService } from '../data-service/data.service';
import { Response, Headers, RequestOptions, Http } from '@angular/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { REGISTER} from '../../constants/url';
import { ApplicationService } from '../application/application.service';
//import { Adal4Service, Adal4HTTPService } from 'adal-angular4';
import { SettingsService } from '../settings/settings.service';
import { Store } from '@ngrx/store';
import { AppState} from '../../state/app.state';


@Injectable()
export class AccountService {


      //subscribe roles
  public SubscribeRoles$ : Observable<any>;

  //store roles
  public UserRoles$ : any;

    constructor(
        public http: Http,
        public authTokens: AuthTokenService,
        public utilityService: UtilityService,
        public dateService : DataService,
        public appService :ApplicationService ,
        public settingService : SettingsService
    ) { 

      
    }

    public register(data: RegisterModel): Observable<Response> {

        const headers = new Headers({ 'Content-Type': 'application/json' });
        headers.append('Accept','application/json');
        const options = new RequestOptions({ headers });

        return this.http.post(REGISTER, data,options)
            .catch(res => observableThrowError(res.json()))
            .do(res => {console.log('User created ' + res)});
    }

    public login(user: LoginModel) {
        return this.authTokens.getTokens(user, 'password')
            .catch(res => observableThrowError(res))
            .do(res =>{});
    }

    
    

    public logout() {
        this.authTokens.deleteTokens();
        this.authTokens.unsubscribeRefresh();
        this.appService.expirationDate$.next('');
        this.appService.showTImeoutMessage$.next(false);
             
        this.utilityService.navigateToSignIn();
    }

  

}
