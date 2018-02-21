import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationService } from './authentication/authentication.service';
import { AuthTokenService } from './auth-token/auth-token.service';
import { UtilityService} from './utility/utility.service';
import { AuthenticationGuard } from '../guards/authentication.guard';
import { AccountService} from './account/account.service';
import { FormService} from './forms/form-control.service';
import { DataService } from './data-service/data.service';
import { TransactionService } from './transaction/transaction.service';
import { ApplicationService } from './application/application.service';
import { DashboardService} from '../main/dashboard/services/dashboard.service';
import { SettingsService} from './settings/settings.service';
import { TransactionsService} from '../main/transactions/services/transactions.service';
import {  FormControlService } from './formcontrol/form-control.service';
import { BaseRequestOptions, Http } from "@angular/http";
import { DialogAppService } from './dialogModal/dialogModal.service';
import { HttpModule } from '@angular/http';
import { UserService } from './users/user.service';
import { AdminGuardGuard } from '../guards/admin-guard';
import { AppSettingsService } from './app-settings/app-settings.service';
import { BusinessUnitService } from './business-unit/business-unit.service';

@NgModule({
    imports: [CommonModule],
    declarations: [],
    exports: [CommonModule]
})

export class ServicesModule{

    public static forRoot(): ModuleWithProviders{
        return{
            ngModule: ServicesModule,
            providers:[
                           FormControlService, 
                           AuthenticationService,
                           FormService,
                           AuthTokenService,
                           UtilityService,
                           AppSettingsService,
                           DashboardService,
                           SettingsService, 
                           TransactionsService,
                           AccountService,
                           AdminGuardGuard,
                           AuthenticationGuard,
                           BusinessUnitService,
                           DialogAppService,
                           DataService,
                           TransactionService,
                           ApplicationService,
                           UserService                        
                       ]
        };
    }
}