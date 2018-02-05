import { PersonalDetailsEntity } from '../models/personal-details'

export interface AppState{
    btcBuddyState : BtcBuddyState;
    userSettingsState : UserSettingsState
}

export interface BtcBuddyState{
    token : any;
}

export interface UserSettingsState{
    personalDetails : PersonalDetailsEntity;
}