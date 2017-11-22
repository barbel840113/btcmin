import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { ControlBase } from './control-base';
import { FormControlService } from '../../services/formcontrol/form-control.service';

@Component({
    selector: 'app-dynamic-form',
    templateUrl:'./dynamic-form.component.html'
})

export class DynamicFormComponent implements OnInit{

    //variable
    @Input() public controls: Array<ControlBase<any>> = [];
    @Input() public btnText = 'Login';    //Default value at least
    @Input() public formClass = 'form-horizontal';

    @Output() public formSubmit : EventEmitter<any> = new EventEmitter<any>();

    //reactive form
    public form : FormGroup;

    constructor(public _controlService: FormControlService){}
    
    //on Init
    public ngOnInit(){
        const sortedControls = this.controls.sort((a,b) => a.order - b.order);
        this.form = this._controlService.toControlGroup(sortedControls);
    }

    public onSubmit()
    {
        this.formSubmit.emit(this.form.value);
    }


}