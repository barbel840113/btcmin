import { PersonalDetailsEntity } from '../models/personal-details'

export interface AppState{
    btcBuddyState : BtcBuddyAuthorizationState;
    userSettingsState : UserSettingsState
}

export interface BtcBuddyAuthorizationState{
    token : any;
}

export interface UserSettingsState{
    personalDetails : PersonalDetailsEntity;
}