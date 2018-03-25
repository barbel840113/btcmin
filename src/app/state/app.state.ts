import { PersonalDetailsEntity } from '../models/personal-details';
import { AuthTokenModel } from '../models/auth-tokens.model';
import { Tier1Details } from '../models/tier1-details';
import {Tier1UserList  } from '../models/Tier1UserList';

export interface AppState{
    authTokenState : TokenState;
    userSettingsState : UserSettingsState,
    tier1UserListState : Tier1UserListState
}

export interface UserSettingsState{
    personalDetails : PersonalDetailsEntity;
    tier1Details :Tier1Details , 
    userName : string;
}

export interface Tier1UserListState{
    tier1UserList : Array<Tier1UserList>
}

export interface TokenState{
    token_info : AuthTokenModel,
    userRoles : UserRoleState
}

export interface UserRoleState{
    roles : [""]
}
