import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromActions from './app.actions';
import { BtcBuddyState, AppState } from './app.state';

export const initialState : BtcBuddyState = {token : ['Welcome Miki']};

export function reducer (state = initialState, action : fromActions.All) : BtcBuddyState{
    switch(action.type)
    {
        case fromActions.TOKEN: {
            return {token :  action.payload};
        }
        case fromActions.TELLME: {
            return { token: action.payload};
        }
        default:{
            return state;
        }
    }
}

export const getBtcBuddyState = createFeatureSelector<BtcBuddyState>('btcBuddyApp');

export const getBtcBuddy = createSelector(
    getBtcBuddyState,
    (state : BtcBuddyState) => state.token
);