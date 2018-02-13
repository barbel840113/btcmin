import { Component, OnInit , Input, ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { UserService } from '../../../services/users/user.service';
import { FormControlService } from '../../../services/formcontrol/form-control.service';
import { FormGroup } from '@angular/forms/src/model';
import { ControlBase } from '../../../shared/forms/control-base';
import { ControlTextbox } from '../../../shared/forms/control-textbox';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as PersonalDetails from '../../../state/userservice.actions';
import { AppState} from '../../../state/app.state';
import { SettingsService } from '../../../services/settings/settings.service';
import {  ApplicationService } from '../../../services/application/application.service';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonalDetailsComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);

  public perDetailsForm : FormGroup;

  public personalDetailsSubscription$ : any;

  public controlPersonalDetails : any = [];

  

  
  constructor(private formControlService:  FormControlService, 
    private userService :UserService, 
    private store: Store<AppState>,
    private cd :ChangeDetectorRef,
    private appSetting : ApplicationService,
    private settinsService : SettingsService) {

      this.personalDetailsSubscription$ = this.settinsService.formControlSubscription$.subscribe(
        (res) =>{
          if(res.length != 0)
          {
            let result = this.appSetting.converResponseToJSONObject(res);
            this.controlPersonalDetails = this.settinsService.initializeControls(result['enbtityProperties']);
            this.perDetailsForm = this.formControlService.toControlGroup(this.controlPersonalDetails);
          }
        
      },
      (error :any)=>{

      });

     
   }

  ngOnInit() {

  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }

}
