import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { AuthenticationGuard } from '../guards/authentication.guard';
import { SettingsComponent } from './settings/settings.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TransactionsComponent} from './transactions/transactions.component';
import { BusinessUnitComponent}  from './business-unit/business-unit.component';
import { BusinessUnitGuard } from '../guards/bu-guard';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    canActivate: [AuthenticationGuard],
    children: [
       { path: 'settings', component: SettingsComponent },
       { path: '', component : DashboardComponent},
       { path: 'dashboards', component : DashboardComponent},
       { path: 'transactions', component:TransactionsComponent},
       { path: 'business-unit', component: BusinessUnitComponent, canActivate: [BusinessUnitGuard], canDeactivate : [BusinessUnitGuard] },
    ]
  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
