import { Injectable } from '@angular/core';
import { RegisterModel } from '../../models/register-model';
import { LoginModel } from '../../models/login.model';
import { AuthTokenService } from '../auth-token/auth-token.service';
import { UtilityService } from '../utility/utility.service';
import { DataService } from '../data-service/data.service';
import { Response, Headers, RequestOptions, Http } from '@angular/http';
import { JwtHelper } from 'angular2-jwt';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { REGISTER} from '../../constants/url';
import { ApplicationService } from '../application/application.service';
//import { Adal4Service, Adal4HTTPService } from 'adal-angular4';
import { SettingsService } from '../settings/settings.service';


@Injectable()
export class AccountService {

    constructor(
        public http: Http,
        public authTokens: AuthTokenService,
        public utilityService: UtilityService,
        public dateService : DataService,
        public appService :ApplicationService ,
        public settingService : SettingsService,
        //public service : Adal4Service,
    ) { 
    }

    public register(data: RegisterModel): Observable<Response> {

        const headers = new Headers({ 'Content-Type': 'application/json' });
        headers.append('Accept','application/json');
        const options = new RequestOptions({ headers });

        return this.http.post(REGISTER, data,options)
            .catch(res => Observable.throw(res.json()))
            .do(res => {console.log('User created ' + res)});
    }

    public login(user: LoginModel) {
        return this.authTokens.getTokens(user, 'password')
            .catch(res => Observable.throw(res))
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
