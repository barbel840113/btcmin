import { Component, OnInit, ViewContainerRef, ChangeDetectorRef, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import {NgProgressService} from "ng2-progressbar";
import {Subscription} from 'rxjs';
import { ControlBase } from '../shared/forms/control-base';
import { ControlTextbox } from '../shared/forms/control-textbox';
import { LoginModel } from '../models/login.model';
import { LoginDetailsComponent } from './login-details/login-details.component';
import { AccountService } from '../services/account/account.service';
import { FormGroup, FormBuilder, FormControl, FormArray } from '@angular/forms';
import { UtilityService } from '../services/utility/utility.service';
import { FormControlService} from '../services/formcontrol/form-control.service';
import { LoginSpinningBarModalComponent } from '../modals/login-spinning-bar-modal/login-spinning-bar-modal.component';
import {ToasterModule, ToasterService} from 'angular2-toaster';
// import the required animation functions from the angular animations module
import { trigger, state, animate, transition, style } from '@angular/animations';
import { LoadingbarComponent } from '../shared/loadingbar/loadingbar.component';
import { routerTransition } from '../router.animations';
import { Observable} from 'rxjs/Observable';
import { Subject} from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import {MatSnackBar} from '@angular/material';
import { AuthTokenService } from '../services/auth-token/auth-token.service';
import { DialogAppService } from '../services/dialogModal/dialogModal.service';

@Component({
  selector: 'appc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [routerTransition()]  ,
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  //path to image
  bannerPath: string;
  scrimLogo : string;
  //container for errors
  public errorsArray : string[] = [];

  //form to pass into login-details
  public form: FormGroup;

  //container for controls which are generated dynamicly inside forms
  public controls : any;

  //Loign Model
  public loginModel: any;
  //form array
  public formArray : FormArray;

  //placeholder for loading bar
  public loadBar: boolean;

  constructor(
    public accountService: AccountService,
    public formControlService : FormControlService,
    public utilityService: UtilityService,
    public _router :Router,
    public toasterService: ToasterService,
    public  vcRef  : ViewContainerRef,
    public authService :AuthTokenService,
    public snackBar: MatSnackBar,
    public dialogService :DialogAppService
  ) {
      
  }


  ngOnInit() {
     
  
    //initialize login dynamic form
    const controls: Array<ControlBase<any>> = [
      new ControlTextbox({
        key: 'username',
        label: 'Username',
        placeholder: 'Username',
        value: '',
        type: 'email',
        required: false,
        order: 1,
        class : 'login-icon',
        icon : 'lock'
      }),
      new ControlTextbox({
        key: 'password',
        label: 'Password',
        placeholder: 'Password',
        value: '',
        type: 'password',
        required: false,
        order: 2,
        class: 'login-icon',
        icon : 'remove_red_eye'
      })
    ];

     this.controls = controls;

    //initialize form
    this.form = this.formControlService.toControlGroup(this.controls); 
  }

  public login(model? : LoginModel ): void{
    this.errorsArray = [];
   
    this.dialogService.openDialog();
    
    this.accountService.login(model)
        .subscribe((result) => {     
          console.log();     
          this.dialogService.closedDialog('/main');
         
        },
        (errors: any) =>{ 

          this.dialogService.closedDialog('/main');
         if(errors.status == 0)
         {
          this.snackBar.open("You are in offline mode", "Close" , {
            duration: 2000,
          });
         }else
         {
           //check
           let error = JSON.parse(errors['_body']);
           if(typeof(error) !== 'undefined' && error instanceof Object)
           {
              this.snackBar.open(error.error, "Close" , {
                duration: 2000,
              });
           }        
         }
      });
   }

   /**
    * External Event
    * @param event 
    */
    public externalLogin() : void
    {
        
    }

   
}
