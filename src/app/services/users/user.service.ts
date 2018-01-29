import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { ApplicationService } from '../application/application.service';
import { GETUSERSETTINGS } from '../../constants/url';
import { DataService } from '../data-service/data.service';
import { ReturnStatement } from '@angular/compiler/src/output/output_ast';

@Injectable()
export class UserService {

  //User Role
  public userRoleSubscription$ : BehaviorSubject<any> = new BehaviorSubject('');

  public userNameSubscription$: BehaviorSubject<any> = new BehaviorSubject('');

  public primaryAddress$: BehaviorSubject<any>

  constructor(private appService : ApplicationService, private dataService : DataService) { 

  }

  public getUSerSettings() : Observable<any>
  {
    const url = GETUSERSETTINGS;

    return this.dataService.get(url);
  }

}
