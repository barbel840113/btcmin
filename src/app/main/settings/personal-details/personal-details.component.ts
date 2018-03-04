import { Component, OnInit, OnDestroy, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
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

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonalDetailsComponent implements OnInit, OnDestroy {


  email = new FormControl('', [Validators.required, Validators.email]);

  public perDetailsForm: FormGroup;

  public personalDetailsSubscription$: any;

  public personalDetails$: Observable<any>

  public controlPersonalDetails: any = [];



  constructor(private formControlService: FormControlService,
    private userService: UserService,
    private store: Store<AppState>,
    private cd: ChangeDetectorRef,
    private appSetting: ApplicationService,
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

      this.bindValueToPersonalDetailsForm(this.perDetailsForm, res);
      console.log(res);

      this.cd.markForCheck();
    });

  }

  ngOnInit() {

  }

  private bindValueToPersonalDetailsForm(form : FormGroup, data : any)
  {
      if(form instanceof FormGroup)
      {
         let keyForms = form.controls;

         let resultArray = this.castReturnObjectToLowerCase(data);

         data['entityProperties'].forEach(element => {
           
          let nameOfProperty = element['name'];

          // find if the forms has property and then assign value
            if(keyForms.hasOwnProperty(nameOfProperty))
            {
                let nameOfPropertyLowerCase = nameOfProperty.toLocaleLowerCase();

                let result = resultArray.find(x => x.value == nameOfPropertyLowerCase);

                if(result != null)
                {
                  if(result.hasOwnProperty('oldvalue'))
                  {   
                    keyForms[element.name].setValue(data[result.oldvalue]);
                  }                  
                }               
            }
         });
  
        
      }
  }

  /**
   * 
   * Result Json has randomly upper case letter
   * Therefore we will store key and new value to compare with form
   */
  private castReturnObjectToLowerCase(object : any) : Array<any>
  {
      let properties = Object.keys(object);

      let tempArray = [];

      for(let i = 0 ; i < properties.length; i++)
      {
           if(properties[i] != "entityProperties")
           {
                let lowerValue = properties[i].toLocaleLowerCase();

                // push value to new array
                tempArray.push({index : i, value : lowerValue, oldvalue : properties[i]});
           }
      }

      return tempArray;
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

         this.userService.updateUserSettings(dataValue).subscribe();
         console.log(dataValue);
     }
 
}
