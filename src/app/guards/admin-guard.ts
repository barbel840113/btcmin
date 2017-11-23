import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {  ApplicationService } from '../services/application/application.service';
import { BusinessUnitComponent } from '../main/business-unit/business-unit.component';

@Injectable()
export class AdminGuardGuard implements CanActivate, CanDeactivate<BusinessUnitComponent> {
  
  /**
   * 
   * @param component 
   * @param currentRoute 
   * @param currentState 
   * @param nextState 
   */
    canDeactivate(component: any, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> 
    {

      if(this.appService.profileUserContainer$.value != null && typeof(this.appService) !== 'undefined')
      {
            let roleName = this.appService.profileUserContainer$.value.role;
  
            if(roleName == 'Admin')
            {
               return true;
            }
            else{
              return false;
            }
      }
      else
      {
        return false;
      }
      
  }

  /**
   * 
   * @param appService 
   */
  constructor(private appService : ApplicationService)
  {
     
  }

  /**
   * 
   * @param next 
   * @param state 
   */
  canActivate(next: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if(this.appService.profileUserContainer$.value != null && typeof(this.appService) !== 'undefined')
    {
          let roleName = this.appService.profileUserContainer$.value.role;

          if(roleName == 'Admin')
          {
             return true;
          }
          else{
            return false;
          }
    }
    else
    {
      return false;
    }
  }
}
