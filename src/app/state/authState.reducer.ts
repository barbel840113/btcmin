import { Action } from '@ngrx/store';
import { AuthTokenModel} from '../models/auth-tokens.model';
import * as tokenAction from './authState.actions';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TokenState} from './app.state';


// token model
export const tokenInit : AuthTokenModel = 
{ 
    access_token : "",
    expiration_date : "",
    id_token : "",
    refresh_token : "",
    expires_in : null,
    token_type : ""
};

// intiialize Token State
export const initialState : TokenState = { token_info : tokenInit};

export function reducer(state = initialState, action : tokenAction.All ) : TokenState {

    switch(action.type)
    {
        case tokenAction.LOADALLTOKENINFOINTOSTORE :{
            let token = action.payload;
            return token;
        }
        case tokenAction.LOADTOKENINTOSTOREONLY:{
            let token = action.payload;
            state.token_info.access_token = token;
            return state;
        }
        default:{
            return state;
        }
    }
}

//get details
export const getTokenDetailsState = createFeatureSelector<TokenState>("all_token_info");
export const getTokenAllDetails = createSelector(getTokenDetailsState,(state : TokenState) => state.token_info);;
export const getTokenDetails = createSelector(getTokenDetailsState, (state: TokenState) => state.token_info.access_token);
