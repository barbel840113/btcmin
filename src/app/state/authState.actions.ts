import { Action } from '@ngrx/store';
import { AuthTokenModel} from '../models/auth-tokens.model';

export const LOADALLTOKENINFOINTOSTORE ="LOADALLTOKENINFOINTOSTORE";
export const LOADTOKENINTOSTOREONLY = "LOADTOKENINTOSTOREONLY";
export const LOADUSERROLES = "LOADUSERROLES";

export class LoadUserRoles implements Action{
     readonly type = LOADUSERROLES;

     constructor(public payload: any)
     { 
         this.payload = payload;
     }
}

export class LoadAllTokenInfoIntoStore implements Action{
    
    readonly type = LOADALLTOKENINFOINTOSTORE;

    constructor(public payload : any)
    {
        this.payload = payload;
    }
}

export class LoadTokenDetailsOnly implements Action{
    
    readonly type =LOADTOKENINTOSTOREONLY;
    
    constructor(public payload : any)
    {
         this.payload = payload;
    }
}

export type All = LoadAllTokenInfoIntoStore | LoadTokenDetailsOnly | LoadUserRoles;
