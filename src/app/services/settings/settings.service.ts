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

@Injectable()
export class SettingsService {
 
  constructor(private _dateService :DataService) {
    
     this.initializeControls();
   }
 
   /**
    * Controls for Settings Component
    */
  public controls: Array<ControlBase<any>>;
  public bitcoinWallet :Array<ControlBase<any>>;

  public bitcoinAddressControls : Array<ControlBase<any>>;

  public isInternalLogin : boolean = true;
  
  /**
   * Initialize Controls for Setting Form
   */
  private initializeControls() {
    this.controls = [
      new ControlTextbox({
        key: 'username',
        label: 'Username',
        placeholder: 'Username',
        value: '',
        type: 'textbox',
        required: true,
        class: 'col-md-2 col-form-label',
        labelclass: 'form-control',
        order: 1
      }),
      new ControlTextbox({
        key: 'firstname',
        label: 'First Name',
        placeholder: 'First Name',
        value: '',
        type: 'textbox',
        required: true,
        class: 'col-md-2 col-form-label',
        labelclass: 'form-control',
        order: 2
      }),
      new ControlTextbox({
        key: 'lastname',
        label: 'Last Name',
        placeholder: 'Last Name',
        value: '',
        type: 'textbox',
        required: true,
        class: 'col-md-2 col-form-label',
        labelclass: 'form-control',
        order: 3
      }),
      new ControlTextbox({
        key: 'email',
        label: 'Email',
        placeholder: 'Email',
        value: '',
        type: 'email',
        required: true,
        class: 'col-md-2 col-form-label',
        labelclass: 'form-control',
        order: 4
      }),
    ];
  }


    private initializeBitCoinWalletControls() {
    this.bitcoinAddressControls = [
      new ControlTextbox({
        key: 'encryptpassword',
        label: 'Private Encrypted Key Hash',
        placeholder: 'Key Hash',
        value: '',
        type: 'textbox',
        required: true,
        class: 'col-md-2 col-form-label',
        labelclass: 'form-control',
        order: 1
      }),
    ];
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
