import { Store }from '@ngrx/store';
import * as userActions from '../../../state/userservice.actions';
import { Component, OnInit, OnDestroy, Input, ChangeDetectionStrategy, ChangeDetectorRef, ViewEncapsulation } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { UserService } from '../../../services/users/user.service';
import { ControlBase } from '../../../shared/forms/control-base';
import { ControlTextbox } from '../../../shared/forms/control-textbox';
import { Subscribable } from 'rxjs/Observable';
import * as PersonalDetails from '../../../state/userservice.actions';
import { AppState } from '../../../state/app.state';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import * as UserActions from '../../../state/userservice.actions';
import * as UserRecuders from '../../../state/userservice.reducer';
import { UserSettingsState } from '../../../state/app.state';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBar} from '@angular/material';
import { SettingsService } from '../../../services/settings/settings.service';
import { ApplicationService } from '../../../services/application/application.service';
import { FormControlService } from '../../../services/formcontrol/form-control.service';

@Component({
  selector: 'app-tier1',
  templateUrl: './tier1.component.html',
  styleUrls: ['./tier1.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Tier1Component implements OnInit {

  // set label dynamically : string = "";
  public showLoadingBarLabel = "Loading Record";
  
  // Container for Controls to be renders
  public controTier1Details: any = [];

  // personal detail Form
  public tier1SettinForm: FormGroup;
  
  // show or hide loading bar
  public showLoadingBar: boolean = true;

  // subscribe tier1 model
  private tier1Detaisl$ : Observable<any>;

  constructor(
    private store: Store<AppState>,
    private settingService :SettingsService,
    private appSettings : ApplicationService,
    private formControlService : FormControlService,
    private cd : ChangeDetectorRef
  ) { 
    
     this.tier1Detaisl$ = this.store.select(state => state.userSettingsState.tier1Details);

     this.tier1Detaisl$.subscribe(res => {
       console.log(res);
       
      this.controTier1Details = this.settingService.initializeControls(res['entityProperties']);

      if (this.controTier1Details != null)
      {
        this.tier1SettinForm = this.formControlService.toControlGroup(this.controTier1Details);

        this.appSettings.bindValueToPersonalDetailsForm(this.tier1SettinForm, res);
  
        this.showLoadingBar = false;
        this.cd.markForCheck();
      }
      else{
         this.controTier1Details = [];
      }
      
     });

  }

  ngOnInit() {
  }

  public submitTier1Details()
  {
    
  }

}
