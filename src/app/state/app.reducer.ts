import { ActionReducerMap, ActionReducer, MetaReducer } from '@ngrx/store';
import { AppState } from './app.state';
import * as authReducer from './authState.reducer';
import { environment } from '../../environments/environment';
import { reduce } from 'rxjs/operators/reduce';
import * as userSettingsReducer from './userservice.reducer';

export const reducers : ActionReducerMap<AppState> = {
    authTokenState : authReducer.reducer,
    userSettingsState: userSettingsReducer.reducer
};

export function logger( reducer : ActionReducer<AppState>) : ActionReducer<AppState>{
    return function(state: AppState, action :any) : AppState{
        console.log('state', state);
        console.log('action', action);
        return reducer(state,action);
    }
}

export const metaReducers : MetaReducer<AppState>[] = !environment.production ? [logger] : []; 