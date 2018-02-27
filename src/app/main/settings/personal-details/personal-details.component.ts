import { Component, OnInit, OnDestroy, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UserService } from '../../../services/users/user.service';
import { FormControlService } from '../../../services/formcontrol/form-control.service';
import { FormGroup } from '@angular/forms/src/model';
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

}
