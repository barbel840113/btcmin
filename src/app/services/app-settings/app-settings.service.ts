import { Injectable } from '@angular/core';
import { Observable} from 'rxjs/Observable';
import { Subject} from 'rxjs/Subject';
import {Subscription} from 'rxjs/Subscription';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { KRAKENCURRENCY, BTCSTAMPUSD, GETUSERNAME, ADMIN_URL} from '../../constants/url';
import {  DataService } from '../data-service/data.service';
import {UPDATEUSERSETTINGS, CREATEBUSINESSUNIT } from '../../constants/url';


@Injectable()
export class AppSettingsService {

  constructor(
    public dataService : DataService
  ) { }

  /**
   * Create Business Unit Model
   * @param model Model for VM Business Unit
   */
  public createBusinessUnit(model : any) : Observable<any>
  {
      const url = CREATEBUSINESSUNIT; 
      return this.dataService.post(url,model)
        .catch(error => Observable.throw(error));
  }

}
