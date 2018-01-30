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

@Injectable()
export class UserService {

  //User Role
  public userRoleSubscription$: BehaviorSubject<any> = new BehaviorSubject('');

  public userNameSubscription$: BehaviorSubject<any> = new BehaviorSubject('');

  public primaryAddress$: BehaviorSubject<any>

  // ARRAY OF CONTROLS
  public formContorls: Array<ControlBase<any>>;
  constructor(private appService: ApplicationService, private dataService: DataService) {

  }

  public getUSerSettings(): Observable<any> {
    const url = GETUSERSETTINGS;

    return this.dataService.get(url).do(
      (res) => {

        // generate form
        this.generatePersonalDetailsForm(res)
        return res;
      }
    );
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
