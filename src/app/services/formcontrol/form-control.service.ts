import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ControlTextbox } from '../../shared/forms/control-textbox';
import { ControlCheckbox } from '../../shared/forms/control-checkbox';
import { ControlBase } from '../../shared/forms/control-base';

@Injectable()
export class FormControlService {

    public toControlGroup(controls: Array<ControlBase<any>>) {

        //Group Controls
        const group_control: any = {};

        controls.forEach(control => {
            const validators: any = [];

            //Required
            if (control.required) {
                validators.push(Validators.required);
            }

            //MinLength
            if (control.minlength) {
                validators.push(Validators.minLength(control.minlength));
            }

            //MaxLength
            if (control.maxlength) {
                validators.push(Validators.maxLength(control.maxlength));
            }

            //Email
            if (control.type == 'email') {

            }

            //Password
            if (control.type == 'password') {

            }

            group_control[control.key] = new FormControl(control.value || '', validators);
        });

        return new FormGroup(group_control);
    }


    /**
     * Create new Form For Guid
     */
    public initializeGuidNewControl(name, type): any {
        // create control and push into array
      return null;

    }

    /**
     * Create new Form Control for String
     */
    public initializeStringNewControl(name, type): any {
       
        let control = new ControlTextbox({
            key: name,
            label: name,
            placeholder: name,
            value: '',
            type: 'textbox',
            required: true,
            class: 'col-md-2 col-form-label',
            labelclass: 'form-control',
            order: 1
        });

        return control;
    }

    /**
     * Create new Form Control for Date Time
     */
    public initializeDateTimeNewControl(name, type): any {
        return null;
    }

}