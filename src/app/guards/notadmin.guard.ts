import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { ApplicationService } from '../services/application/application.service';
import { BusinessUnitComponent } from '../main/business-unit/business-unit.component';
import { UserService } from '../services/users/user.service';

@Injectable()
export class NotadminGuard implements CanActivate {

  constructor(private userService : UserService)
  {
      
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      
      if(!this.userService.isUserAdmin && this.userService.isUserTier1)
      {
          return true;
      }
      else{
        return false;
      }
     
  }
}
