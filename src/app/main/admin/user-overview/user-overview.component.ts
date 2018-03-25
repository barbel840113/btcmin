import { Component, OnInit, OnDestroy, Input, ChangeDetectionStrategy, ChangeDetectorRef, ViewEncapsulation } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { UserService } from '../../../services/users/user.service';
import { FormControlService } from '../../../services/formcontrol/form-control.service';
import { ControlBase } from '../../../shared/forms/control-base';
import { ControlTextbox } from '../../../shared/forms/control-textbox';
import { Store } from '@ngrx/store';
import { Subscribable } from 'rxjs/Observable';
import * as PersonalDetails from '../../../state/userservice.actions';
import { AppState } from '../../../state/app.state';
import { SettingsService } from '../../../services/settings/settings.service';
import { ApplicationService } from '../../../services/application/application.service';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import * as Tier1UserActions from '../../../state/admin/tier1userlist.actions';
import * as Tier1UserReducer from '../../../state/admin/tier1userlist.reducer';
import { Tier1UserListState } from '../../../state/app.state';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-user-overview',
  templateUrl: './user-overview.component.html',
  styleUrls: ['./user-overview.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UserOverviewComponent implements OnInit {

  //subscribe value from server/state
  private tier1UserList$ : Observable<any>;

  public tier1UserContainer : any;

  constructor(
    private userUservice : UserService,
    private store: Store<AppState>
  ) {
   
      //load tier1 user list
      this.userUservice.loadTierUserList();

     this.tier1UserList$ = this.store.select(state => state.tier1UserListState.tier1UserList);

     this.tier1UserList$.subscribe(res =>{
        
        if(res)
        { 
            this.tier1UserContainer = res;
        }
    });
   }

  ngOnInit() {
  }

}
