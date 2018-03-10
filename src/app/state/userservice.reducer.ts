import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromActions from './userservice.actions';
import { UserSettingsState , AppState } from './app.state';
import { PersonalDetailsEntity } from '../models/personal-details';
import { Tier1Details } from '../models/tier1-details';

//initialize personal details
var personalDetails : PersonalDetailsEntity = {} as PersonalDetailsEntity;
personalDetails.postCode = "";
personalDetails.street1 = "";
personalDetails.street2 = "";
personalDetails.entityProperties = [];

//intiialize tier1details
var tier1Details : Tier1Details = {} as Tier1Details;

export const initialState : UserSettingsState = {
    personalDetails : personalDetails, 
    userName : "",
    tier1Details : tier1Details    
};

export function reducer (state = initialState, action : fromActions.All) : UserSettingsState{
    switch(action.type)
    {
        // load personal details into store
        case fromActions.LOADPERSONALDETAILS: {
           return state;    
        }

        // load personal details success after loading into store
        case fromActions.LOADPERSONALDETAILSSUCCES: {
            return {
                personalDetails : action.payload,
                tier1Details : state.tier1Details,
                userName : state.userName
            }
        }

        // update personal details
        case fromActions.UPDATEPERSONALDETAILS: {
            return { 
                personalDetails: action.payload, 
                userName : state.userName,
                tier1Details : state.tier1Details};
        }

        // load and store username
        case fromActions.LOADUSERNAME :{
            return { 
                userName : action.payload, 
                personalDetails : state.personalDetails,
                tier1Details : tier1Details};
        }

        // load tier1 serrint
        case fromActions.LOADTIER1MODEL: {
                return state;
        }

        // load success model into store
        case fromActions.LOADTIER1MODELSUCCESS: {
                return {
                    personalDetails : state.personalDetails,
                    userName : state.userName,
                    tier1Details : action.payload
                };
        }

        // clear user settings
        case fromActions.CLEARUSERSETTINGS: {
            state.userName = "";
            state.personalDetails.entityProperties = [];
            state.personalDetails.postCode = "";
            state.personalDetails.street1 = "";
            state.personalDetails.street2 = "";
            return state;
        }
        default:{
            return state;
        }
    }
}

export const getPersonalDetailsState = createFeatureSelector<UserSettingsState>('details');

export const getDetailsDetails = createSelector(getPersonalDetailsState,(state : UserSettingsState) =>  state.personalDetails);
