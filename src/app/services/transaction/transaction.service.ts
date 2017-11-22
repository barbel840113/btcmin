import { Injectable, InjectionToken,  } from '@angular/core';
import { DataService } from '../data-service/data.service';
import { ADMIN_URL} from '../../constants/url';

@Injectable()
export class TransactionService {

  constructor(private dataService : DataService) { }

  public do(){
    return this.dataService.get(ADMIN_URL);
  }

}
