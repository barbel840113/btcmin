import { Injectable } from '@angular/core';
import { ControlBase } from '../../shared/forms/control-base';
import { ControlTextbox } from '../../shared/forms/control-textbox';
import { FormControlService } from '../../services/formcontrol/form-control.service';
import { GETUSERSETTINGINFORMATION,CREATENEWBITCOINADDRESS, GETBITCIONADDRESSFORUSER } from '../../constants/url';
import { Observable} from 'rxjs/Observable';
import { Subject} from 'rxjs/Subject';
import {Subscription} from 'rxjs/Subscription';
import {  DataService } from '../data-service/data.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import * as prop from '../../constants/properties';

@Injectable()
export class SettingsService {
 
  constructor(private _dateService :DataService, private _formService:FormControlService) {
    
    
   }
 
   /**
    * Controls for Settings Component
    */
  public controls: Array<ControlBase<any>> = Array();
  public bitcoinWallet :Array<ControlBase<any>>;

  public bitcoinAddressControls : Array<ControlBase<any>>;

  public isInternalLogin : boolean = true;
  
  /**
   * Initialize Controls for Setting Form
   */
  public initializeControls(entityProperties): any {

    var value;
    try{
       value = entityProperties;
    }
    catch(err)
    {
        console.log(err);   
        return null;
    }

    // return null if there is no entittyProperities
    if(entityProperties == null)
    {
       return null;
    }

    // iterate through object properties and create control
    for(let i = 0 ; i < entityProperties.length; i++)
    {
      
          let control = null;
          try{

            let obj = entityProperties[i];
            let name = obj['name'];
            let type = obj['type'];

            switch(type)
            {
              case prop.entityProperties.Guid : 
                  control = this._formService.initializeGuidNewControl(name, type);
                  break;
              case prop.entityProperties.Strign:
                  control = this._formService.initializeStringNewControl(name, type);
                  break;
              case prop.entityProperties.DateTime:
                  control = this._formService.initializeDateTimeNewControl(name, type);
                  break;
              default:
                  control = Array();
                
            }
           
            if(control != null)
            {               
                // push new control in array
                this.controls.push(control);
            }
          }
          catch(err)
          {
            console.log(err);
          }
    }
   
  }
  

  /**
   * Get UserInformation Settings
   */
  public getUserInformationSettings() : Observable<any>{
      const url = GETUSERSETTINGINFORMATION;
      return this._dateService.get(url)
      .catch(res =>Observable.throw(res));
      
  }



  /**
   * Load All Valus for Settings
   */
  public loadAllValuds() :Observable<any>
  {
     return Observable.forkJoin([
     
      
     ]);
  }


  
  public createNewBitcoinAddress(model: any): Observable<any>{
    const url = CREATENEWBITCOINADDRESS;
     return this._dateService.post(url,model)
     .catch(res => Observable.throw(res));
  }
}
