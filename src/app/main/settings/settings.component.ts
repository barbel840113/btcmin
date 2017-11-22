import { Component, OnInit, Output, ViewContainerRef, OnDestroy, ChangeDetectorRef, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray, Validators } from '@angular/forms';
import { SettingsService } from '../../services/settings/settings.service';
import { routerTransition } from '../../router.animations';
import { ApplicationService } from '../../services/application/application.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { ControlBase } from '../../shared/forms/control-base';
import { ControlTextbox } from '../../shared/forms/control-textbox';
import { FormControlService } from '../../services/formcontrol/form-control.service';
import { ToasterModule, ToasterService } from 'angular2-toaster';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  animations: [routerTransition()],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class SettingsComponent implements OnInit, OnDestroy {

  //username
  private username: any;
  private userNameSubscription$: any;

  //subscription user setting information
  private userSettingInformationContainer: any;
  private userSettingInformationSuscription$: any;

  private settingSubscription$: any;
  private settingInformation: any;

  private bitcoinAddressWaletSubscription$: any;
  private bitcoinAddressWaletContainer: any = new Array();

  //private register form
  private settingsForm: FormGroup;
  private bitcoinAddressForm: FormGroup;
  //private controls to store all element in dynamic form
  private settingsFormControlsContainer: any;
  private bitcoinsFormControlsContainer: any;
  

  //enable or disable button for generate token
  private enableOrDisableGenerateWallet: boolean = false;

  tiles = [
    {text: 'One', cols: 1, rows: 2, color: 'lightblue'},
    {text: 'Two', cols: 3, rows: 1, color: 'lightgreen'},
    {text: 'Four', cols: 3, rows: 1, color: '#DDBDF1'},
  ];

  private errorHandler = {

  };
  private handlerEvent = {};

  constructor(
    private _settingsSettings: SettingsService,
    private _applicationService: ApplicationService,
    private _toastService: ToasterService,
    private router: Router,
    private formBuilder: FormBuilder,
    private cd: ChangeDetectorRef,
    private formControlService: FormControlService, ) {

    this.userNameSubscription$ = this._applicationService.userNameSubscription$.subscribe(
      (result) => {
        this.username = result;
        this.cd.markForCheck();
      }, (error: any) => {
        this._toastService.pop('error', 'BTCApp Error', error);
      });

  
  }

  /**
   * Load All Setttings
   */
  private loadSettingsValues() {
  }
  /**
   * Submit Settings
   */
  private onSubmit() {
    //update First Name and Last Name in the future any value
    this._applicationService.updateUserSettings(this.settingsForm.value).subscribe(
      (result) => {
        this._toastService.pop("success", "The User Information has been updated", "");
      },
      (error: any) => { }
    );
  }

  ngOnDestroy() {
    this.userNameSubscription$.unsubscribe();
  }


  //create a form
  private createSettingsForm() {

    //settings controls
    this.settingsFormControlsContainer = this._settingsSettings.controls;

    //bitcoin address controls
    this.bitcoinsFormControlsContainer = this._settingsSettings.bitcoinAddressControls;

    this._settingsSettings.controls.forEach(element => {
      this.errorHandler[element.key] = '';
    });

    this._settingsSettings.controls.forEach(element => {
      this.handlerEvent[element.key] = { 'required': 'Required', 'tab': 'tab-settings' };
    });
    //initialize form
    this.settingsForm = this.formControlService.toControlGroup(this.settingsFormControlsContainer);
    this.bitcoinAddressForm = this.formControlService.toControlGroup(this.bitcoinsFormControlsContainer);
  }

  ngOnInit() {


    this.loadSettingsValues();

 
    //this.createSettingsForm();

    //initialize layout of personal details
   // this.initializeLayout();

    //bind valud to the form
    //this.bindUserSettingsValueInToForm();

  }

    /**
   * Bind Settings to the form
   */
  private bindUserSettingsValueInToForm() {
    if (this.userSettingInformationContainer != null) {
      let keys = Object.keys(this.userSettingInformationContainer)
      keys.forEach(element => {
        this.settingsForm.controls[element.toLocaleLowerCase()].setValue(this.userSettingInformationContainer[element]);
      });

    }
  }


}
