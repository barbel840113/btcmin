import { Action } from '@ngrx/store';


export const LOADTOKEN = "LOADTOKEN";
export const UPDATETOKEN = "UPDATETOKEN";

export class LoadTokenAction implements Action{
   readonly type = LOADTOKEN;

   constructor(public payload : any){
       this.payload = payload;
   }
}

export class UpdateTokenAction implements Action{
    readonly type = UPDATETOKEN;

    constructor(public payload : any)
    {
         this.payload = payload;
    }
}



export type All = LoadTokenAction | UpdateTokenAction;