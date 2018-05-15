import { Injectable } from '@angular/core';
import { Observable,  Subject, Subscription,  BehaviorSubject } from 'rxjs';
import { KRAKENCURRENCY, BTCSTAMPUSD, GETUSERNAME, ADMIN_URL} from '../../constants/url';
import {  DataService } from '../data-service/data.service';
import {UPDATEUSERSETTINGS, CREATEBUSINESSUNIT } from '../../constants/url';


@Injectable()
export class AppSettingsService {

  constructor(
    public dataService : DataService
  ) { }



}
