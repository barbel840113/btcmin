import { ControlBase } from './control-base';

export class ControlDropdown extends ControlBase<string>{

    public options: Array<{key : string, value: string}> = [];

    constructor(options : any ={})
    {
        super(options);
        this.type = 'dropdown';
        this.value = options.value || [];
    }
}