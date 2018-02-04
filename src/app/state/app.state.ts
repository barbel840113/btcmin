export interface AppState{
    btcBuddyState : BtcBuddyState;
    userSettingsState : UserSettingsState
}

export interface BtcBuddyState{
    token : any;
}

export interface UserSettingsState{
    details : any;
}