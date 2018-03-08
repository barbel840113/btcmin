import { Action } from '@ngrx/store';


export const CLEARME = "CLEARME";

export class Clear implements Action{

    readonly type = CLEARME;

    constructor(public payload){
        this.payload = undefined;
    }
}
   
export type All = Clear;