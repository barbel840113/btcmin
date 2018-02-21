import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromActions from './userservice.actions';
import { UserSettingsState , AppState } from './app.state';
import {  PersonalDetailsEntity } from '../models/personal-details';


var personalDetails : PersonalDetailsEntity = {} as PersonalDetailsEntity;
personalDetails.postCode = "";
personalDetails.street1 = "";
personalDetails.street2 = "";

export const initialState : UserSettingsState = {personalDetails : personalDetails, userName : ""};

export function reducer (state = initialState, action : fromActions.All) : UserSettingsState{
    switch(action.type)
    {
        // load personal details into store
        case fromActions.LOADPERSONALDETAILS: {
           return {personalDetails :  action.payload, userName : state.userName};           
        }

        // update personal details
        case fromActions.UPDATEPERSONALDETAILS: {
            return { personalDetails: action.payload, userName : state.userName};
        }

        // load and store username
        case fromActions.LOADUSERNAME :{
            return { userName : action.payload, personalDetails : state.personalDetails};
        }
        default:{
            return state;
        }
    }
}

export const getPersonalDetailsState = createFeatureSelector<UserSettingsState>('details');

export const getDetailsDetails = createSelector(getPersonalDetailsState,(state : UserSettingsState) =>  state.personalDetails);
