import { Action } from '@ngrx/store';
import { AuthTokenModel} from '../models/auth-tokens.model';
import * as tokenAction from './authState.actions';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TokenState, UserRoleState} from './app.state';


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

export const userRoles  : UserRoleState = {
    roles : [""]
};

// intiialize Token State
export const initialState : TokenState = { token_info : tokenInit, userRoles :  userRoles};

export function reducer(state = initialState, action : tokenAction.All ) : TokenState {

    switch(action.type)
    {
        case tokenAction.LOADALLTOKENINFOINTOSTORE :{
            let token = action.payload;
            state.token_info = token;
            return state;
        }
        case tokenAction.LOADTOKENINTOSTOREONLY:{
            let token = action.payload;
            state.token_info.access_token = token;
            return state;
        }
        case tokenAction.LOADUSERROLES : {
            let roles = action.payload;
            if(state.userRoles.roles != null)
            {
                state.userRoles.roles = roles;
            }           
            return state;
        }        

        case tokenAction.CLEARAUTHSTATE : {
            state.token_info.access_token = "";
            state.token_info.expires_in = 0;
            state.token_info.expiration_date = "";
            state.token_info.id_token = "";
            state.token_info.token_type = "";
            state.userRoles.roles = [""];
            state.token_info.refresh_token = "";
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
export const getUserRoles = createSelector(getTokenDetailsState, (state: TokenState) => state.userRoles.roles);
