import { Component, OnInit, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { ControlBase } from '../../shared/forms/control-base';
import { ControlTextbox } from '../../shared/forms/control-textbox';
import { FormControlService } from '../../services/formcontrol/form-control.service';
import { AccountService } from '../../services/account/account.service';
import { RegisterModel } from '../../models/register-model';
import { LoginSpinningBarModalComponent } from '../../modals/login-spinning-bar-modal/login-spinning-bar-modal.component';
import {ToasterModule, ToasterService} from 'angular2-toaster';
// import the required animation functions from the angular animations module
import { trigger, state, animate, transition, style } from '@angular/animations';
import { routerTransition } from '../../router.animations';
import { DialogAppService } from '../../services/dialogModal/dialogModal.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [routerTransition()]  ,
})
export class RegisterComponent implements OnInit {

  //public register form
  public registerForm: FormGroup;
  public btnSubmit : string;
  //public controls to store all element in dynamic form
  public registerFormControlsContainer: any;

  constructor(
    public router: Router,
    public formBuilder: FormBuilder,
    public formControlService: FormControlService,
    public accountService : AccountService,
    public snackBar: MatSnackBar,
    public dialogService :DialogAppService
  ) {

    //create a form
    this.createRegisterForm();

    this.btnSubmit = "Register";
  }

  ngOnInit() {
      
      //subscribe any changes in register form to chec
      this.registerForm.valueChanges.subscribe(val =>{
       
      });

  }


  //create a form
  public createRegisterForm() {
    const controls: Array<ControlBase<any>> = [
      new ControlTextbox({
        key: 'username',
        label: 'Username',
        placeholder: 'Username',
        value: '',
        type: 'textbox',
        required: true,
        class: 'col-4 col-form-label',
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
        class: 'col-4 col-form-label',
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
        class: 'col-4 col-form-label',
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
        class: 'col-4 col-form-label',
        labelclass: 'form-control',
        order: 4
      }),
      new ControlTextbox({
        key: 'password',
        label: 'Password',
        placeholder: 'Password',
        value: '',
        type: 'password',
        required: true,
        class: 'col-4 col-form-label',
        labelclass: 'form-control',
        order: 5
      }),
      new ControlTextbox({
        key: 'confirmpassword',
        label: 'Confirm Password',
        placeholder: 'Confirm Password',
        value: '',
        class: 'col-4 col-form-label',
        labelclass: 'form-control',
        type: 'password',
        required: true,
        order: 6
      })
    ];

    this.registerFormControlsContainer = controls;

    //initialize form
    this.registerForm = this.formControlService.toControlGroup(this.registerFormControlsContainer);

  }

  //onsubmit form
  public onSubmit() {
    console.log('submit register');
    let result = this.serializeRegisterVMData(this.registerForm);
    this.dialogService.openDialog();

    this.accountService.register(this.registerForm.value).subscribe(
       (val) => {
      
      
    },(error : any) =>{
      if(error.succeeded == false)
      {
         error.errors.forEach(element => {
          this.snackBar.open(element.description, "Close" , {
            duration: 2000,
          });
         }); 
      }
    
      
    });
  }

  public serializeRegisterVMData(form : FormGroup) 
  {
      
  }
}
