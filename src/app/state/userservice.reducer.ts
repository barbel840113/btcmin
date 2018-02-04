import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromActions from './userservice.actions';
import { UserSettingsState , AppState } from './app.state';

export const initialState : UserSettingsState = {details : 'No Information fetch yet.'};

export function reducer (state = initialState, action : fromActions.All) : UserSettingsState{
    switch(action.type)
    {
        case fromActions.LOADPERSONALDETAILS: {
            return {details :  action.payload};
        }
        case fromActions.UPDATEPERSONALDETAILS: {
            return { details: action.payload};
        }
        default:{
            return state;
        }
    }
}

export const getDetailState = (state : AppState) => state.userSettingsState;