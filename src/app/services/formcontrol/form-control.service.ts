import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ControlBase } from '../../shared/forms/control-base';

@Injectable()
export class FormControlService{
    
    public toControlGroup(controls: Array<ControlBase<any>>){

        //Group Controls
        const group_control: any = {};

        controls.forEach(control => {
            const validators: any = [];

            //Required
            if(control.required)
            {
                validators.push(Validators.required);
            }

            //MinLength
            if(control.minlength)
            {
                validators.push(Validators.minLength(control.minlength));
            }

            //MaxLength
            if(control.maxlength)
            {
                validators.push(Validators.maxLength(control.maxlength));
            }

            //Email
            if(control.type == 'email')
            {
                
            }

            //Password
            if(control.type == 'password')
            {
                
            }

            group_control[control.key] = new FormControl(control.value || '', validators);
        });

        return new FormGroup(group_control);
    }
}