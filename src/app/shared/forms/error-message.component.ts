import { Component, Input } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';

import { ControlBase } from './control-base';


@Component({
    selector: 'app-control-error-message',
    template: `<div *ngIf="errorMessage" class="form-control-feedback">{{errorMessage}}</div>`
})

export class ErrorMessageComponent{

    @Input() public control: ControlBase<any>;

    @Input() public form: FormGroupDirective;

    get errorMessage() {
        const c: any = this.form.form.get(this.control.key);
        for (const propertyName in c.errors) {
            if (c.errors.hasOwnProperty(propertyName) && c.touched) {
                
            }
        }
        return undefined;
    }
}