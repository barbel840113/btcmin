import { Action } from '@ngrx/store';


export const TOKEN = "TOKEN";
export const TELLME = "TELLME";

export class TokenAction implements Action{
   readonly type = TOKEN;

   constructor(public payload : any){}
}

export class CallMe implements Action{
    readonly type = TELLME;

    constructor(public payload: ['sivi', 'talda']){
        this.payload = payload;
    }
}

export type All = TokenAction | CallMe;