import { Injectable } from '@angular/core';
import { ControlBase } from '../../shared/forms/control-base';
import { ControlTextbox } from '../../shared/forms/control-textbox';
import { FormControlService } from '../../services/formcontrol/form-control.service';
import { GETUSERSETTINGINFORMATION,CREATENEWBITCOINADDRESS, GETBITCIONADDRESSFORUSER } from '../../constants/url';
import { Observable,  Subject, Subscription,  BehaviorSubject } from 'rxjs';
import {  DataService } from '../data-service/data.service';
import * as prop from '../../constants/properties';
import { ApplicationService } from '../application/application.service';

@Injectable()
export class SettingsService {
 
  constructor(
      private _dateService :DataService, 
      private _formService:FormControlService) {      
   } 


  /**
   * Initialize Controls for Setting Form
   */
  public initializeControls(entityProperties): any {

    let value;
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
    let tempArray = [];

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
              case prop.entityProperties.Boolean:
                  control = this._formService.initializeBoolenControl(name, type);
                  break;
              default:
                  control = Array();
                
            }
           
            if(control != null)
            {               
                // push new control in array
                tempArray.push(control);
            }
          }
          catch(err)
          {
            console.log(err);
          }
    }
    

    return tempArray;
    
//subscribe new value
 
  }

}
