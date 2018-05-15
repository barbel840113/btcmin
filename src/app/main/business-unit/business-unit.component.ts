import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControlService } from '../../services/formcontrol/form-control.service';
import { ControlBase } from '../../shared/forms/control-base';
import { ControlTextbox } from '../../shared/forms/control-textbox';
import { DialogAppService } from '../../services/dialogModal/dialogModal.service';
import { AppSettingsService } from '../../services/app-settings/app-settings.service';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject ,  Observable } from 'rxjs';






import { BusinessUnitService } from '../../services/business-unit/business-unit.service';
import { BusinessUnit } from './business-unit-model';

import * as d3 from "d3";


export interface Element {
  businessName: string;
  postCode: string;
  street1: string;
  street2: string;
}

const data: Element[] = [
  { businessName: 'Value Not Loaded', postCode: 'Value Not Loaded', street1: 'Value Not Loaded', street2: 'Value Not Loaded' }
];

export class ExampleDataSource extends DataSource<any> {

  /** This is a data Source Container */
  public dataSource: Array<Element> = new Array();

  private dataSouceArray: BehaviorSubject<any> = new BehaviorSubject<any>(data);
  /** Constructor */
  constructor(private buService: BusinessUnitService) {
    // call parent class
    super();

    this.buService.BusinessUnitContainerSubscription$.subscribe(
      (res) => {
        this.dataSouceArray.next(this.delegateToConvert(res));
      }
    );


  }

  public delegateToConvert: any = this.convertToModel;

  /** convert view model to model */
  convertToModel(value: any): Array<Element> {
    var array: Array<Element> = new Array();
    if (value instanceof Array) {
      value.forEach(element => {
        array.push(<Element>element);
      });
    }

    return array;
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Element[]> {
    return Observable.of(this.dataSouceArray.value);
  }

  /** Disconnect */
  disconnect() { }
}


@Component({
  selector: 'app-business-unit',
  templateUrl: './business-unit.component.html',
  styleUrls: ['./business-unit.component.scss']
})
export class BusinessUnitComponent implements OnInit {

  displayedColumns = ['businessName', 'postCode', 'street1', 'street2'];
  dataSourceSec = new ExampleDataSource(this.businessUnitService);

  public options: any = {
    removeOnSpill: true,
    copy: true
  };

  items: Array<any> = ['Miki', 'Talda', 'JAroslav'];
  itemDrop: Array<any> = [];

  public businessUnitForm: FormGroup;

  //array of controls
  public businessUnitControls: Array<any> = [];

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(public _formBuilder: FormBuilder,
    public formControlService: FormControlService,
    public appSettingsService: AppSettingsService,
    public dialogService: DialogAppService,
    public businessUnitService: BusinessUnitService,
  ) {

 
  }

  ngOnInit() {

    //generate new form
    this.generateControlsForBusinessUnit();

    d3.selectAll("p").style("color","yellow");

    this.businessUnitService.getAllBusinessUnit().subscribe(
      (result) => {
        if (result.status == 200) {
          var arrayBU = JSON.parse(result['_body'])
          this.businessUnitService.BusinessUnitContainerSubscription$.next(arrayBU);
        }

      },
      (error: any) => {
        this.dialogService.openSnackBar(error.error);
      }
    );
  }


  /**
   * Generate new Form
   */
  public generateControlsForBusinessUnit() {
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
        class: 'login-icon',
        icon: 'lock'
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
        icon: 'remove_red_eye'
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
        icon: 'remove_red_eye'
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
        icon: 'remove_red_eye'
      })
    ];

    for (let i = 0; i < controls.length; i++) {
      let index = controls[i].order;
      //check if the array is empty then initialize
      //find the order and put together to be display in the stepper
      if (typeof (this.businessUnitControls[index - 1]) === 'undefined') {
        this.businessUnitControls[index - 1] = new Array();
        this.businessUnitControls[index - 1].push(controls[i]);
      }
      else {
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
  public onSubmit() {
    //check for value
    let model = this.businessUnitForm.value;
    if (!(model instanceof Object)) {
      //return error
      this.dialogService.openMessageDialog();
    }
    else {
      this.dialogService.openDialog();

      this.businessUnitService.createBusinessUnit(model).subscribe(res => {
        if (res.status === 200) {
          this.dialogService.closedDialog();
        }
      }, (errors: any) => {
        this.dialogService.closedDialog();
        let errorModel = <Response>errors;
        this.dialogService.openSnackBar(errorModel.statusText);
      });
    }
  }

  private onDrag(args) {
    let [e, el] = args;
    // do something 
  }

  private onDrop(args) {
    let [e, el] = args;
    // do something 
  }

  private onOver(args) {
    let [e, el, container] = args;
    // do something 
  }

  private onOut(args) {
    let [e, el, container] = args;
    // do something 
  }


}
