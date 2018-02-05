import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromActions from './userservice.actions';
import { UserSettingsState , AppState } from './app.state';
import {  PersonalDetailsEntity } from '../models/personal-details';


var personalDetails : PersonalDetailsEntity = {} as PersonalDetailsEntity;
personalDetails.postCode = "";
personalDetails.street1 = "";
personalDetails.street2 = "";

export const initialState : UserSettingsState = {personalDetails : personalDetails};

export function reducer (state = initialState, action : fromActions.All) : UserSettingsState{
    switch(action.type)
    {
        case fromActions.LOADPERSONALDETAILS: {
           return {personalDetails :  action.payload};
        }
        case fromActions.UPDATEPERSONALDETAILS: {
            return { personalDetails: action.payload};
        }
        default:{
            return state;
        }
    }
}

export const getPersonalDetailsState = createFeatureSelector<UserSettingsState>('details');

export const getDetailsDetails = createSelector(getPersonalDetailsState,(state : UserSettingsState) =>  state.personalDetails);
