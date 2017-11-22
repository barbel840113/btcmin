import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ControlBase } from '../../shared/forms/control-base';

@Component({
  selector: 'app-login-details',
  templateUrl: './login-details.component.html',
  styleUrls: ['./login-details.component.scss']
})
export class LoginDetailsComponent implements OnInit {

  @Input() public formClass: string;
  @Input() public btnSubmit: string;
  @Input() public controls: any;
  @Input() public form: FormGroup;
  @Output() public externalLogin : EventEmitter<any> = new EventEmitter<any>();;
  private btnExternalLogin : string;
   

  //Output Event to pass value to Parent Component
  @Output() public formSubmit: EventEmitter<any> = new EventEmitter<any>();

  //contrustor
  constructor(
   ) { 

    this.btnExternalLogin = 'External Login';
  }

  //on Initialize of component
  ngOnInit() {
  }


  //submit Event Emitter to pass form values to parent component
  onSubmit() {

    
    this.formSubmit.emit(this.form.value);
  }

  /**
   * Federate SAML Authentication
   */
  federateAuthentication()
  {
      this.externalLogin.emit(true);
  }

 
 }


