import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import { ApplicationService} from '../application/application.service';


export interface AppState {
  isUserLogged: boolean;
};

@Injectable()
export class AuthenticationService {

  public isUserLogged: any = false;
  
  private securityRole: string = "";
  
  //user is authenticated
  redirectUrl: string;

  //constructor
  constructor(public applicationService: ApplicationService) {
   this.applicationService.isUserloggedSubscription$.subscribe(
     (result)=>{
       this.isUserLogged = result;
     }
   );
   
   this.applicationService.profileUserContainer$.subscribe(
     (result) =>{
       this.securityRole = result.role;
     },
     (error : any) =>{}
   );

  }

  public setUserAuthentication(isAuthenticated : boolean)
  {
     this.isUserLogged = isAuthenticated;
  }

  public getSecurityRoleName()
  {
      return this.securityRole;
  }

  //check and return boolean true if user has access false if not
  checkIfTheUserHasToken(): boolean {
    if (typeof (this.isUserLogged) !== 'undefined') {
      if (this.isUserLogged) {
        return true;
      }
    }
    else {
      return false;
    }
  }
}
