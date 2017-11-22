import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ControlBase } from '../../shared/forms/control-base';


@Injectable()
export class FormService {

    public toControlGroup(controls: Array<ControlBase<any>>) {
        const group: any = {};

        controls.forEach(control => {
            group[control.key] = new FormControl(control.value || '');
        });

        return new FormGroup(group);
    }
}