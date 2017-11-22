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

  private isUserLogged: any = false;
 
  
  //user is authenticated
  redirectUrl: string;

  //constructor
  constructor(private applicationService: ApplicationService) {
   this.applicationService.isUserloggedSubscription$.subscribe(
     (result)=>{
       this.isUserLogged = result;
     }
   );
  }

  public setUserAuthentication(isAuthenticated : boolean)
  {
     this.isUserLogged = isAuthenticated;
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
