import { Action } from '@ngrx/store';

export const LOADTIER1USERLISTMODEL =  "LOADTIER1USERLISTMODEL";
export const LOADTIER1USERLISTSUCCESS = "LOADTIER1USERLISTSUCCESS";

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



export type All = LoadUser1ListSuccessAction |  LoadUser1List;