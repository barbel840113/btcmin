import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { Observable ,  of } from 'rxjs';
import * as fromUserActions from '../userservice.actions';
import {  UserService } from '../../services/users/user.service';
import {ApplicationService } from '../../services/application/application.service';

@Injectable()
export class PersonalDetails {

    constructor(
        private actions$ : Actions,
        private userService :UserService,
        private appService : ApplicationService
    ){

    }

    @Effect()
    loadTPersonalDetilasModelSettings$ : Observable<Action> = this.actions$    
            .ofType(fromUserActions.LOADPERSONALDETAILS)
            .switchMap(() =>
                this.userService.getUSerSettings()                        
                    .map(data => new fromUserActions.LoadPersonalDetailsSuccessAction(this.appService.converResponseToJSONObject(data)))
            );
}
