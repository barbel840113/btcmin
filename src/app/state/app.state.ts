import { PersonalDetailsEntity } from '../models/personal-details';
import { AuthTokenModel } from '../models/auth-tokens.model';

export interface AppState{
    authTokenState : TokenState;
    userSettingsState : UserSettingsState
}

export interface UserSettingsState{
    personalDetails : PersonalDetailsEntity;
    userName : string;
}

export interface TokenState{
    token_info : AuthTokenModel
}
