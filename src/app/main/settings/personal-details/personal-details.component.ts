import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { UserService } from '../../../services/users/user.service';
import { FormControlService } from '../../../services/formcontrol/form-control.service';
import { FormGroup } from '@angular/forms/src/model';
import { ControlBase } from '../../../shared/forms/control-base';
import { ControlTextbox } from '../../../shared/forms/control-textbox';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss']
})
export class PersonalDetailsComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);

  public perDetailsForm : FormGroup;

  
  constructor(private formControlService:  FormControlService, private userService :UserService) { }

  ngOnInit() {

  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }

}
