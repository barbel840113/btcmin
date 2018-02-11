import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BtcBuddyAuthorizationState, AppState } from './app.state';
import * as actions from './btcbuddy.actions';

export const initialState : BtcBuddyAuthorizationState = {token : 'Welcome Miki'};

export function reducer (state = initialState, action : actions.All) : BtcBuddyAuthorizationState{
    switch(action.type)
    {
        case actions.LOADTOKEN: {
            return {token :  action.payload};
        }
        case actions.UPDATETOKEN: {
            return { token: action.payload};
        }
        default:{
            return state;
        }
    }
}

export const getBtcBuddyState = createFeatureSelector<BtcBuddyAuthorizationState>('btcBuddyApp');

export const getBtcBuddy = createSelector(
    getBtcBuddyState,
    (state : BtcBuddyAuthorizationState) => state.token
);