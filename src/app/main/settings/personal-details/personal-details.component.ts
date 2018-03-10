import { Component, OnInit, OnDestroy, Input, ChangeDetectionStrategy, ChangeDetectorRef, ViewEncapsulation } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { UserService } from '../../../services/users/user.service';
import { FormControlService } from '../../../services/formcontrol/form-control.service';
import { ControlBase } from '../../../shared/forms/control-base';
import { ControlTextbox } from '../../../shared/forms/control-textbox';
import { Store } from '@ngrx/store';
import { Subscribable } from 'rxjs/Observable';
import * as PersonalDetails from '../../../state/userservice.actions';
import { AppState } from '../../../state/app.state';
import { SettingsService } from '../../../services/settings/settings.service';
import { ApplicationService } from '../../../services/application/application.service';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import * as UserActions from '../../../state/userservice.actions';
import * as UserRecuders from '../../../state/userservice.reducer';
import { UserSettingsState } from '../../../state/app.state';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class PersonalDetailsComponent implements OnInit, OnDestroy {


  email = new FormControl('', [Validators.required, Validators.email]);

  // personal detail Form
  public perDetailsForm: FormGroup;

  // subscribe details from Store => Personal Details
  public personalDetailsSubscription$: any;

  // Observable => Personal Details
  public personalDetails$: Observable<any>

  // Container for Controls to be renders
  public controlPersonalDetails: any = [];

  // show or hide loading bar
  public showLoadingBar: boolean = true;

  // set label dynamically : string = "";
  public showLoadingBarLabel = "Loading Record";


  constructor(private formControlService: FormControlService,
    private userService: UserService,
    private store: Store<AppState>,
    private cd: ChangeDetectorRef,
    private appSetting: ApplicationService,
    public snackBar: MatSnackBar,
    private settinsService: SettingsService) {

    this.personalDetailsSubscription$ = this.userService.primaryAddress$.subscribe(
      (res) => {
        if (res.length != 0) {
          let result = this.appSetting.converResponseToJSONObject(res);

        }

      },
      (error: any) => {

      });

    this.personalDetails$ = this.store.select(state => state.userSettingsState.personalDetails);

    this.personalDetails$.subscribe(res => {

      this.controlPersonalDetails = this.settinsService.initializeControls(res['entityProperties']);
      this.perDetailsForm = this.formControlService.toControlGroup(this.controlPersonalDetails);

      this.appSetting.bindValueToPersonalDetailsForm(this.perDetailsForm, res);

      this.showLoadingBar = false;
      console.log(res);
      
      this.cd.markForCheck();
    });

  }

  ngOnInit() {

  }
  

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }

  ngOnDestroy(): void {
    if (this.personalDetailsSubscription$ instanceof BehaviorSubject) {
      try {
        this.personalDetailsSubscription$.unsubscribe();
      }
      catch (error) {
        console.log(error);
      }
    }
  }


     /**
      * Submit Personal Details Just Address and PostCode
      */
     public submitPersonalDetails()
     {
         var dataValue = this.perDetailsForm.value;

         // show loading bar
         this.showLoadingBarLabel = "Updating Record";
         this.showLoadingBar = true;
         // if the user personal details have been updated then we subscribe to server
         this.userService.updateUserSettings(dataValue).subscribe(
           res =>{
            this.snackBar.open("The Details have been updated", "Close" , {
              duration: 2000,
            });

            // hide loading bar
            this.showLoadingBar = false;
            this.cd.markForCheck();
           },
           (error:  any) =>{
              console.log(error);
              this.snackBar.open("There was error with updateding Personal Details", "Close" , {
                duration: 2000,
              });

           }
         );


         console.log(dataValue);
     }
 
}
