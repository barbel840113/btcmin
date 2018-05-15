import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/users/user.service';
import {UserOverviewComponent } from '../main/user-overview/user-overview.component';

@Injectable()
export class AdminGuardGuard implements CanActivate, CanDeactivate<UserOverviewComponent> {
  
  
  /**
   * 
   * @param component 
   * @param currentRoute 
   * @param currentState 
   * @param nextState 
   */
    canDeactivate(component: any, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> 
    {

      if(this.userService.isUserAdmin)
      {
          return true;
      }
      else{
        return false;
      }
      
  }

  /**
   * 
   * @param appService 
   */
  constructor(private userService : UserService)
  {
       
  }

  /**
   * 
   * @param next 
   * @param state 
   */
  canActivate(next: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if(this.userService.isUserAdmin  && !this.userService.isUserTier1)
      {
          return true;
      }
      else{
        return false;
      }
  }
}
