import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from '../services/authentication/authentication.service';
import { AccountService } from '../services/account/account.service';
import { UtilityService } from '../services/utility/utility.service';
import { AuthTokenService } from '../services/auth-token/auth-token.service';
//import { Adal4Service, Adal4HTTPService } from 'adal-angular4';
import { ApplicationService } from '../services/application/application.service';

@Injectable()
export class AuthenticationGuard implements CanActivate {

  public isLogged: any;

  //constructor
  constructor(
     public router: Router,    //Router
     public authService : AuthenticationService, //Authetnication Service
     public utlityService : UtilityService,     
     //public service: Adal4Service, 
     //public http: Adal4HTTPService,
     public authTokenService : AuthTokenService,
     public applicationService : ApplicationService
  ) {
   
  }

  //can Active will apply while user will roaming between components
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    //save url after loggin to redirect back where user requested to go 
    let url: string = state.url;

    return this.checkLogin(url);
  }


  //check if use is logged or not
  checkLogin(url: string): boolean {
    //check if return url is token
     // Handle callback if this is a redirect from Azure
     // this.service.handleWindowCallback();
      
          
      /*if(this.service.userInfo.authenticated == true)
      {
        if(this.applicationService.isProfileUserInformationSaveInMemory == true)
        {
            
        }
        else{
          this.applicationService.isProfileUserInformationSaveInMemory = true;
          this.authTokenService.storeAzureADDTokenInStore(this.service.userInfo);
          
        }
       

        return true;
      }  //check for token from azure aad
       */
    //check for login in custom database
    if(this.authService.checkIfTheUserHasToken())
    {
        return true;
    }

    //store the attempted URL for redirecting
    this.authService.redirectUrl = url;

    //navigate to the login page with extras
    this.utlityService.navigate('/login');

    return false;
  }

}
