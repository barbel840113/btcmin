import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { ApplicationService } from '../application/application.service';
import { GETUSERSETTINGS } from '../../constants/url';
import { DataService } from '../data-service/data.service';
import { ReturnStatement } from '@angular/compiler/src/output/output_ast';
import { FormControlService } from '../formcontrol/form-control.service';
import { FormGroup } from '@angular/forms/src/model';
import { ControlBase } from '../../shared/forms/control-base';
import { ControlTextbox } from '../../shared/forms/control-textbox';
import * as UserStateActions from '../../state/userservice.actions';
import { Store} from '@ngrx/store';
import { AppState } from '../../state/app.state';

@Injectable()
export class UserService {

  public primaryAddress$: BehaviorSubject<any> = new BehaviorSubject("");

  // ARRAY OF CONTROLS
  public formContorls: Array<ControlBase<any>>;
  constructor(
    private dataService: DataService,
    private store : Store<AppState> ) {

  }

  public getUSerSettings(): Observable<any> {
    const url = GETUSERSETTINGS;

    return this.dataService.get(url)
        .catch(err => Observable.throw(err))
        .do(res => {
          return res
        }).map(res =>{ return res.json()})
        .flatMap(res =>{
          
          //check if res is ok then assing
          let parseResult = res;
          
          //subscribe into store
          this.store.dispatch(new UserStateActions.LoadPersonalDetailsAction(parseResult));
          return Observable.of(res);
        });
  }

  public getAllUserSettingsValues() : Observable<any>
  {
    return Observable.forkJoin([
      this.getUSerSettings()
    ]);
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
}
