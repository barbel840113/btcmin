import { Injectable } from '@angular/core';
import { Observable} from 'rxjs/Observable';
import { Subject} from 'rxjs/Subject';
import {Subscription} from 'rxjs/Subscription';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { KRAKENCURRENCY, BTCSTAMPUSD, GETUSERNAME, ADMIN_URL} from '../../constants/url';
import {  DataService } from '../data-service/data.service';
import {SettingsService  } from '../settings/settings.service';
import {UPDATEUSERSETTINGS } from '../../constants/url';
import { UserService } from '../users/user.service';



@Injectable()
export class ApplicationService {
  
  //private timer 
  public timer$ : Observable<any>;
  public timeSubscription$ : BehaviorSubject<any> = new BehaviorSubject(Date.now().toString());

  //subscribe for open and closed side bar navigation
  public slidenavigationbarSubject$ = new Subject();
  public expirationDate$ : BehaviorSubject<any> = new BehaviorSubject('');
  public showTImeoutMessage$: BehaviorSubject<any> = new BehaviorSubject(false);
  private expDateToken : string = '';
  //username getusenr
  public userNameSubscription$ :BehaviorSubject<any> = new BehaviorSubject('User unknown');
  public applicationUserInformation$ : BehaviorSubject<any> = new BehaviorSubject('');

  public isUserLogged : boolean = false;

  //profile of user
  public profileUserContainer$ : BehaviorSubject<any> = new BehaviorSubject('');
  //check if the user profile has been saved if yes just ignored incoming requrest
  public isProfileUserInformationSaveInMemory : boolean = false;

  //subscribe currenty
  public krakenCurrencySubscription$ : BehaviorSubject<any> = new BehaviorSubject('Value not loaded');

  //bitcoin curren
  public btcCurrencyInfoSubscription$ :  BehaviorSubject<any> = new BehaviorSubject({high: 'Value not loaded', low: 'Value not loaded'});

  public userProfileSubscription$ : BehaviorSubject<any> = new BehaviorSubject('');
  public tokenSubscription$ : BehaviorSubject<any> = new BehaviorSubject('');

  public authTokensSubscription$: BehaviorSubject<any> = new BehaviorSubject('');

  public isUserloggedSubscription$: BehaviorSubject<any> = new BehaviorSubject(false);

  constructor(
    private dataService : DataService, 
    private _settingService: SettingsService,
    private _userService: UserService ) {      
 
   }

   //get currency from kraken
   public getKrakenCurrency(): Observable<any>{
      let url = KRAKENCURRENCY;
      return this.dataService.get(url)
      .catch(res => Observable.throw(res))
      .do(res => {
        if(res != null)
        {
          if(res.status == 200)
          {

            let tempObject = JSON.parse(res._body).result
            this.krakenCurrencySubscription$.next(tempObject);
          }

          if(res.status == 0)
          {
            this.krakenCurrencySubscription$.next('Value not loaded');
          }
        }
      });       
   }

   public getAdminDummyValue(): Observable<any>
   {
     let url  = ADMIN_URL;
     return this.dataService.get(url)
       .catch(res => Observable.throw(res))
       .do(res =>{});
   }

   //get bitcoin currency again usd
   public getBTCUSDFromBitstamp() : Observable<any>
   {
       let url = BTCSTAMPUSD;
      return this.dataService.get(url)
      .catch(res => Observable.throw(res))
      .do(res => {
         if(res != null)
         {
           if(res.status == 200)
           {
              let tempResponse = JSON.parse(res._body);
              this.btcCurrencyInfoSubscription$.next(tempResponse);
           }

           if(res.status == 0)
           {
            this.btcCurrencyInfoSubscription$.next('Value Not loaded');
           }
         }
      });
   }

    getUpdateValue():Observable<any>
   {
      return  Observable.forkJoin([
         this.getBTCUSDFromBitstamp(),
         this.getKrakenCurrency(),        
      ]);
   }

   getAllValues(): Observable<any>
   {
    
    return  Observable.forkJoin(
         this.getBTCUSDFromBitstamp(),
         this.getKrakenCurrency(),
         //this._userService.getAllUserSettingsValues()
      );
   }

   //udpate user settings
   public updateUserSettings(data: any): Observable<any>
   {
       const url = UPDATEUSERSETTINGS;
       return this.dataService.post(url, data)
           .catch(res => res.json())
           .do(res => {});
   }

   //convert response to json object
   public converResponseToJSONObject(object) : any{
      if(object)
      {
        let result = JSON.parse(object['_body'])

        return result;
      }
      else{
        return null;
      }
   }

}
