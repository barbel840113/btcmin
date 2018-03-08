import { Action } from '@ngrx/store';


export const LOADPERSONALDETAILS = "LOADPERSONALDETAILS";
export const UPDATEPERSONALDETAILS = "UPDATEPERSONALDETAILS";
export const LOADUSERNAME = "LOADUSERNMAE";
export const CLEARUSERSETTINGS = "CLEARUSERSETTINGS";

export class ClearUserSettings implements Action{
    readonly type = CLEARUSERSETTINGS;
    constructor()
    {
         
    }
}

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



export type All = LoadPersonalDetailsAction | UpdatePersonalDetails | LoadUserName | ClearUserSettings;