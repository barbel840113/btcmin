import { Component, OnInit, Output, ViewContainerRef, OnDestroy, ChangeDetectorRef, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray, Validators } from '@angular/forms';
import { SettingsService } from '../../services/settings/settings.service';
import { routerTransition } from '../../router.animations';
import { ApplicationService } from '../../services/application/application.service';
import { Subscription ,  Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ControlBase } from '../../shared/forms/control-base';
import { ControlTextbox } from '../../shared/forms/control-textbox';
import { FormControlService } from '../../services/formcontrol/form-control.service';
import { UserService } from '../../services/users/user.service';
import { Store } from '@ngrx/store';
import * as PersonalDetailsStoreActions from '../../state/userservice.actions';
import { AppState, UserSettingsState } from '../../state/app.state';
import { State } from '@ngrx/store/src/state';
import * as reducer from '../../state/userservice.reducer';
import { PersonalDetailsEntity } from '../../models/personal-details';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  animations: [routerTransition()],
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

  private userSettingsSubscription$: any;

  private personalDetailsState$: any;
  public personalDetailsContainer: PersonalDetailsEntity;

  //enable or disable button for generate token
  private enableOrDisableGenerateWallet: boolean = false;

  tiles = [
    { text: 'One', cols: 1, rows: 2, color: 'lightblue' },
    { text: 'Two', cols: 3, rows: 1, color: 'lightgreen' },
    { text: 'Four', cols: 3, rows: 1, color: '#DDBDF1' },
  ];

  private errorHandler = {

  };
  private handlerEvent = {};

  constructor(
    private _settingsSettings: SettingsService,
    private _applicationService: ApplicationService,
    private router: Router,
    private formBuilder: FormBuilder,
    private cd: ChangeDetectorRef,
    private formControlService: FormControlService,
    private userService: UserService,
    private store: Store<AppState>) {

    this.userNameSubscription$ = this._applicationService.userNameSubscription$.subscribe(
      (result) => {
        this.username = result;
        this.cd.markForCheck();
      }, (error: any) => {
        
      });

     this.loadSettingsValues();

     //load user services
    this.userService.loadTier1Details();
    this.userService.loadPersonalDetails();
 
  }

  /**
   * Submit Settings
   */
  private onSubmit() {
    //update First Name and Last Name in the future any value
    this._applicationService.updateUserSettings(this.settingsForm.value).subscribe(
      (result) => {
       
      },
      (error: any) => { }
    );
  }

  ngOnDestroy() {
    this.userNameSubscription$.unsubscribe();
    //this.personalDetailsState$.unsubscribe();

  }

  private loadSettingsValues()
  {
    this.userService.getAllUserSettingsValues().subscribe();
  }


  //create a form
  private createSettingsForm() {

  }

  ngOnInit() {

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
