import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Observable } from 'rxjs';
import { DataService } from '../data-service/data.service';
import { GETBUSINESSUNIT, CREATEBUSINESSUNIT } from '../../constants/url';
import {  BusinessUnit } from '../../main/business-unit/business-unit-model';

@Injectable()
export class BusinessUnitService {
  
  /**
   * Hold all Business Unit
   */
  public BusinessUnitContainerSubscription$ : BehaviorSubject<any> = new BehaviorSubject<any>(new Array<BusinessUnit>());  

  
  public getAllBusinessUnit() : Observable<any>
  {
     const url = GETBUSINESSUNIT;
     return this.dataService.get(url);  
  }

  constructor(private dataService : DataService) { 
 
    
    }

  /**
   * 
   */
  public getRefreshBusinessUnit() 
  {
     const url = GETBUSINESSUNIT
  }

    /**
   * Create Business Unit Model
   * @param model Model for VM Business Unit
   */
  public createBusinessUnit(model : any) : Observable<any>
  {
      const url = CREATEBUSINESSUNIT; 
      return this.dataService.post(url,model)
        .catch(error => Observable.throw(error));
  }

}
