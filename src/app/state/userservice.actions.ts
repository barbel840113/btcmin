import { Action } from '@ngrx/store';


export const LOADPERSONALDETAILS = "LOADPERSONALDETAILS";
export const UPDATEPERSONALDETAILS = "UPDATEPERSONALDETAILS";
export const LOADPERSONALDETAILSSUCCES = "LOADPERSONALDETAILSSUCCES";
export const LOADUSERNAME = "LOADUSERNMAE";
export const CLEARUSERSETTINGS = "CLEARUSERSETTINGS";
export const LOADTIER1MODEL = "LOADTIER1MODEL";
export const LOADTIER1MODELSUCCESS = "LOADTIER1MODELSUCCESS";
export const LOADTIER1USERLISTMODEL =  "LOADTIER1USERLISTMODEL";
export const LOADTIER1USERLISTSUCCESS = "LOADTIER1USERLISTSUCCESS";

export class LoadTier1ModelSettings implements Action{
    readonly type = LOADTIER1MODEL;

   constructor(){
       
   }
}

export class LoadTier1ModelSuccess implements Action{
    readonly type = LOADTIER1MODELSUCCESS;

    constructor(public payload : any)
    {
         this.payload = payload;
    }
}

export class ClearUserSettings implements Action{
    readonly type = CLEARUSERSETTINGS;
    constructor()
    {
         
    }
}

export class LoadUser1List implements Action{
    readonly type = LOADTIER1USERLISTMODEL;
    constructor()
    {
         
    }
}

export class LoadUser1ListSuccessAction implements Action{
    readonly type = LOADTIER1USERLISTSUCCESS;
    constructor(public payload)
    {
         this.payload = payload;
    }
}

export class LoadPersonalDetailsSuccessAction implements Action{
    readonly type = LOADPERSONALDETAILSSUCCES;

    constructor(public payload){
        this.payload = payload;
    }
}

export class LoadPersonalDetailsAction implements Action{
   readonly type = LOADPERSONALDETAILS;

   constructor(){}
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



export type All = LoadPersonalDetailsAction | UpdatePersonalDetails | LoadUser1ListSuccessAction |  LoadUser1List|
| LoadUserName | ClearUserSettings | LoadTier1ModelSettings | LoadTier1ModelSuccess | LoadPersonalDetailsSuccessAction;