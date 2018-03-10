import { PersonalDetailsEntity } from '../models/personal-details';
import { AuthTokenModel } from '../models/auth-tokens.model';
import { Tier1Details } from '../models/tier1-details';

export interface AppState{
    authTokenState : TokenState;
    userSettingsState : UserSettingsState
}

export interface UserSettingsState{
    personalDetails : PersonalDetailsEntity;
    tier1Details :Tier1Details , 
    userName : string;
}

export interface TokenState{
    token_info : AuthTokenModel,
    userRoles : UserRoleState
}

export interface UserRoleState{
    roles : [""]
}
