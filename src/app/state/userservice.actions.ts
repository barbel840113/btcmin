import { Action } from '@ngrx/store';


export const LOADPERSONALDETAILS = "LOADPERSONALDETAILS";
export const UPDATEPERSONALDETAILS = "UPDATEPERSONALDETAILS";

export class LoadPersonalDetailsAction implements Action{
   readonly type = LOADPERSONALDETAILS;

   constructor(public payload : any){}
}

export class UpdatePersonalDetails implements Action{
    readonly type = UPDATEPERSONALDETAILS;

    constructor(public payload : any)
    {
         this.payload = payload;
    }
}



export type All = LoadPersonalDetailsAction | UpdatePersonalDetails;