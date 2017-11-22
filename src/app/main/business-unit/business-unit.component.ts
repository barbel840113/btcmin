import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { FormControlService  } from '../../services/formcontrol/form-control.service';
import { ControlBase } from '../../shared/forms/control-base';
import { ControlTextbox } from '../../shared/forms/control-textbox';
import { DialogAppService } from '../../services/dialogModal/dialogModal.service';
import { AppSettingsService } from '../../services/app-settings/app-settings.service';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import {DataSource} from '@angular/cdk/collections';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/fromEvent';

export class TableBasicExample {
  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  dataSource = new ExampleDataSource();
}

export class ExampleDataSource extends DataSource<any> {
  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Element[]> {
    return Observable.of(data);
  }

  disconnect() {}
}

export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const data: Element[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
  {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
  {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
  {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
  {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
  {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
  {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
  {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
  {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
  {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
];



@Component({
  selector: 'app-business-unit',
  templateUrl: './business-unit.component.html',
  styleUrls: ['./business-unit.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BusinessUnitComponent implements OnInit {

  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  dataSource = new ExampleDataSource();
 
  public businessUnitForm : FormGroup;

  //array of controls
  public businessUnitControls : Array<any>  = [];

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(public _formBuilder: FormBuilder, 
    public formControlService : FormControlService,
    public appSettingsService :AppSettingsService,
    public dialogService : DialogAppService
  ) { }

  ngOnInit() {

    //generate new form
    this.generateControlsForBusinessUnit();
  }

  /**
   * Generate new Form
   */
  public generateControlsForBusinessUnit()
  {
        //initialize login dynamic form
        const controls: Array<ControlBase<any>> = [
          new ControlTextbox({
            key: 'Street1',
            label: 'Main Street',
            placeholder: 'Main Street',
            value: '',
            type: 'test',
            required: true,
            order: 2,
            class : 'login-icon',
            icon : 'lock'
          }),
          new ControlTextbox({
            key: 'Street2',
            label: 'Second Street',
            placeholder: 'Second Street',
            value: '',
            type: 'test',
            required: true,
            order: 2,
            class: 'login-icon',
            icon : 'remove_red_eye'
          }),
          new ControlTextbox({
            key: 'BusinessName',
            label: 'Business Name',
            placeholder: 'Business Name',
            value: '',
            type: 'test',
            required: true,
            order: 1,
            class: 'login-icon',
            icon : 'remove_red_eye'
          }),
          new ControlTextbox({
            key: 'PostCode',
            label: 'Street PostCode',
            placeholder: 'Street PostCode',
            value: '',
            type: 'test',
            required: true,
            order: 2,
            class: 'login-icon',
            icon : 'remove_red_eye'
          })
        ];

        for(let i = 0; i < controls.length; i++)
        {
          let index = controls[i].order;
          //check if the array is empty then initialize
          //find the order and put together to be display in the stepper
          if(typeof(this.businessUnitControls[index -1]) === 'undefined')
          {
             this.businessUnitControls[index- 1] = new Array();
             this.businessUnitControls[index - 1].push(controls[i]);
          }
          else{
            let index = controls[i].order;
            //this is a index to store value
            this.businessUnitControls[index - 1].push(controls[i]);
          }
        }
              

        this.businessUnitForm = this.formControlService.toControlGroup(controls);
  }

  /**
   * Create Business Unit
   */
  public onSubmitBusinessUnit()
  {
       //check for value
       let model = this.businessUnitForm.value;
       if(!(model instanceof Object))
       {
          //return error
          this.dialogService.openMessageDialog();
       }
       else
       {
        this.dialogService.openDialog();

        this.appSettingsService.createBusinessUnit(model).subscribe(res =>{
           if(res.status ===  200)
           {
              this.dialogService.closedDialog();
           }
        },(errors : any)=>{
          this.dialogService.closedDialog();
          let errorModel = <Response>errors;
          this.dialogService.openSnackBar(errorModel.statusText);
        });
       }
  }

  



}
