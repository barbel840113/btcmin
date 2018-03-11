import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import { of } from 'rxjs/observable/of';
import * as fromUserActions from '../userservice.actions';
import {  UserService } from '../../services/users/user.service';
import {ApplicationService } from '../../services/application/application.service';

@Injectable()
export class LoadTier1 {

    constructor(
        private actions$ : Actions,
        private userService :UserService,
        private appService : ApplicationService
    ){

    }

    @Effect()
    loadTier1ModelSettings$ : Observable<Action> = this.actions$    
            .ofType(fromUserActions.LOADTIER1MODEL)
            .switchMap(() =>
                this.userService.getTier1ModelForUser()                        
                    .map(data => new fromUserActions.LoadTier1ModelSuccess(this.appService.converResponseToJSONObject(data)))
            );
}