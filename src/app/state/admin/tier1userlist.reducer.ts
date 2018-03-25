import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromActions from './tier1userlist.actions';
import { Tier1UserListState , AppState } from '../app.state';
import { Tier1UserList } from '../../models/tier1userlist';

var tier1UserList : Tier1UserList = {} as Tier1UserList;

var arr : Array<Tier1UserList> = [];

export const initialState : Tier1UserListState = {
    tier1UserList : arr
};


export function reducer (state = initialState, action : fromActions.All) : Tier1UserListState{
    switch(action.type)
    {
        // load personal details into store
        case fromActions.LOADTIER1USERLISTMODEL: {
           return state;    
        }

        // load personal details success after loading into store
        case fromActions.LOADTIER1USERLISTSUCCESS: {
            return {            
               tier1UserList : action.payload
            }
        }
       
        default:{
            return state;
        }
    }
}


