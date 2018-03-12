import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { ApplicationService } from '../application/application.service';
import { GETUSERSETTINGS, UPDATEPRIMARYADDRESS, CREATETIER1MODEL, GETUSERTIER1MODEL } from '../../constants/url';
import { DataService } from '../data-service/data.service';
import { ReturnStatement } from '@angular/compiler/src/output/output_ast';
import { FormControlService } from '../formcontrol/form-control.service';
import { FormGroup } from '@angular/forms/src/model';
import { ControlBase } from '../../shared/forms/control-base';
import { ControlTextbox } from '../../shared/forms/control-textbox';
import * as UserStateActions from '../../state/userservice.actions';
import * as AuthStateTokenAction from '../../state/authState.actions';
import { Store} from '@ngrx/store';
import { AppState } from '../../state/app.state';
import * as userActions from '../../state/userservice.actions';

@Injectable()
export class UserService {

  public primaryAddress$: BehaviorSubject<any> = new BehaviorSubject("");

  // check if the user is admin
  public isUserAdmin  = false;
  
  // check if the user is simply user
  public isUserTier1 = false;
  
  //store roles
  public UserRoles$  =  [];

  public SubscribeRoles$  : Observable<any>;

  //subscribe roleusers
  public subscribeRolesUser$: any;
  // ARRAY OF CONTROLS
  public formContorls: Array<ControlBase<any>>;

  //store roles
  public userRoles : Array<any>
  ;
  constructor(
    private dataService: DataService,
    private store : Store<AppState> ) {

      this.subscribeRolesUser$ = this.store.select(state => state.authTokenState.userRoles.roles);

      this.subscribeRolesUser$.subscribe(res =>{
        if(res != null)
        {
            this.userRoles = res;
        }
      });

      this.SubscribeRoles$ = this.store.select(state => state.authTokenState.userRoles.roles);

      this.SubscribeRoles$.subscribe(res =>{
          this.UserRoles$ = res;
  
          // identify if user has more then one role
          if(this.UserRoles$ instanceof(Array))
          {
            let index = this.UserRoles$.findIndex(x => x == "Admin");
            if(index != -1)
            {
                this.isUserAdmin = true;
                this.isUserTier1 = false;
                console.log("admin log on");
            }
            else
            {
                this.isUserAdmin = false;
                this.isUserTier1  = true;
            }
          }
          else
          {
             if(this.UserRoles$ == "Admin")
             {
                 this.isUserAdmin = true;
                 this.isUserTier1 = false;
             }
             else{
               this.isUserAdmin = false;
               this.isUserTier1 = true;
             }
          }
      });

  }

  /** 
   * Load Tier1 Details
  */
  public loadTier1Details()
  {
     this.store.dispatch(new userActions.LoadTier1ModelSettings())
  }

  /** 
   * Load Personal Details
  */
  public loadPersonalDetails()
  { 
    this.store.dispatch(new userActions.LoadPersonalDetailsAction())
  }


  /** 
   * Clear User Settings
  */
  public clearUserDetails ()
  {
      this.store.dispatch(new UserStateActions.ClearUserSettings());
  }

  /** 
   * Clean Auth Token State
  */
  public cleanAuthTokenState()
  {
     // clear store
     this.store.dispatch(new AuthStateTokenAction.ClearAuthState());
  }
  

  public getUSerSettings(): Observable<any> {
    const url = GETUSERSETTINGS;

    return this.dataService.get(url);
        // .catch(err => Observable.throw(err))
        // .do(res => {
        //   return res
        // }).map(res =>{ return res.json()})
        // .flatMap(res =>{
          
        //   //check if res is ok then assing
        //   let parseResult = res;
          
        //   //subscribe into store
        //   this.store.dispatch(new UserStateActions.LoadPersonalDetailsAction(parseResult));
        //   return Observable.of(res);
        // });
  }

  public getAllUserSettingsValues() : Observable<any>
  {
    return Observable.forkJoin([
      this.getUSerSettings(),
      this.getTier1ModelForUser()
    ]);
  }

  public updateUserSettings(data : any): Observable<any>{
     const url = UPDATEPRIMARYADDRESS;
     return this.dataService.put(url,data);
  }

  /**
   * Generate Personal Details Form based on the respond from server
   */
  public generatePersonalDetailsForm(obj) {

    // if obj is not null
    if (obj != null) {
      const parsedObject = JSON.parse(obj['_body']);

      if (parsedObject == null) {

      }
      else {

        let parsedObjectKey = Object.keys(parsedObject);

        for (let i = 0; i < parsedObject.lenght; i++) {
          let control = new ControlTextbox({
            key: parsedObject[i],
            label: 'Username',
            placeholder: 'Username',
            value: '',
            type: 'email',
            required: false,
            order: 1,
            class: 'login-icon',
            icon: 'lock'
          });

          this.formContorls.push(control);
        }
      }

    }

  }

  /**
   * Send request to create tier1 model
   */
  public createTier1ModelForUser() : Observable<any>
  {
      const url = CREATETIER1MODEL ;
      return this.dataService.post(url);
  }

  public getTier1ModelForUser() : Observable<any>
  {
      const url = GETUSERTIER1MODEL;
      return this.dataService.get(url);
  }
}
