import { Component, OnInit, OnDestroy, ViewChild, Input, ChangeDetectionStrategy, ChangeDetectorRef, ViewEncapsulation } from '@angular/core';
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
import {MatTableDataSource, MatPaginator} from '@angular/material';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-user-overview',
  templateUrl: './user-overview.component.html',
  styleUrls: ['./user-overview.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserOverviewComponent implements OnInit {

  //subscribe value from server/state
  private tier1UserList$ : Observable<any>;

  public  hideID = false;
  public dataSource : MatTableDataSource<any>;
  private tier1UserContainer  = [];
  public tier1UserVMContainer = [];
  public displayedColumns = ['firstName', 'lastName', 'email', 'verified','checked'];

  align = 'start';

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private userUservice : UserService,
    private store: Store<AppState>,
    private cd : ChangeDetectorRef
  ) {
   
      //load tier1 user list
     this.userUservice.loadTierUserList();

     this.tier1UserList$ = this.store.select(state => state.tier1UserListState.tier1UserList);

     this.tier1UserList$.subscribe(res =>{
        
        if(res)
        { 
            this.tier1UserContainer = res;

            //modify fields 
            this.generateVMModelTier1User(this.tier1UserContainer,this.tier1UserVMContainer, this.displayedColumns);

            this.dataSource = new MatTableDataSource(this.tier1UserVMContainer);

            //refresh
            this.cd.markForCheck();
        }
    });

    this.dataSource = new MatTableDataSource(this.tier1UserVMContainer);

    this.cd.markForCheck();
   }

   ngAfterViewInit()
   {
      this.dataSource.paginator = this.paginator;
   }

  ngOnInit() {
  }

  /**
   * 
   * @param obj array of values
   * @param params list of properties include in view model
   * @param vmObj new generate vm models based on model and list properties pass through
   */
  private generateVMModelTier1User(obj, vmObj, params)
  {
       if (obj instanceof Array)
       {
           if(obj.length != 0)
           {
               //iterate through array and get object 
               // compare and then generate vm property if apply
                for(let i =0 ; i < obj.length; i++)
                {
                  let temObject = {};
                   //iterate through properties and copy over
                   for(let j = 0; j < params.length; j++)
                   {
                       if(obj[i].hasOwnProperty(params[j]))
                       {
                         // store property in new object
                            temObject[params[j]] = obj[i][params[j]] ;                           
                           
                       }
                   }

                   // store ir 
                   this.tier1UserVMContainer.push(temObject);
                }
           }
       }
  }

  

}
