import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { ApplicationService } from '../application/application.service';

@Injectable()
export class UserService {

  //User Role
  public userRoleSubscription$ : BehaviorSubject<any> = new BehaviorSubject('');

  public userNameSubscription$: BehaviorSubject<any> = new BehaviorSubject('');

  constructor(private appService : ApplicationService) { 

  }

}
