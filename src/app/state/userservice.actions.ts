import { Action } from '@ngrx/store';


export const LOADPERSONALDETAILS = "LOADPERSONALDETAILS";
export const UPDATEPERSONALDETAILS = "UPDATEPERSONALDETAILS";
export const LOADUSERNAME = "LOADUSERNMAE";

export class LoadPersonalDetailsAction implements Action{
   readonly type = LOADPERSONALDETAILS;

   constructor(public payload : any){
       this.payload = payload;
   }
}

export class UpdatePersonalDetails implements Action{
    readonly type = UPDATEPERSONALDETAILS;

    constructor(public payload : any)
    {
         this.payload = payload;
    }
}

export class LoadUserName implements Action{
    readonly type = LOADUSERNAME;

    constructor(public payload :any)
    {
        this.payload = payload;
    }
}



export type All = LoadPersonalDetailsAction | UpdatePersonalDetails | LoadUserName;