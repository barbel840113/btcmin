import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { AuthenticationGuard } from '../guards/authentication.guard';
import { SettingsComponent } from './settings/settings.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TransactionsComponent} from './transactions/transactions.component';
import { BusinessUnitComponent}  from './business-unit/business-unit.component';
import { AdminGuardGuard } from '../guards/admin-guard';
import {NotadminGuard } from '../guards/notadmin.guard';
import { UserOverviewComponent } from './user-overview/user-overview.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    canActivate: [AuthenticationGuard],
    children: [
       { path: 'settings', component: SettingsComponent, canActivate : [NotadminGuard] },
       { path: '', component : DashboardComponent},
       { path: 'dashboards', component : DashboardComponent, },
       { path: 'transactions', component:TransactionsComponent, canActivate : [NotadminGuard]},
       { path: 'user-overview', component:UserOverviewComponent, canActivate: [AdminGuardGuard],canDeactivate: [AdminGuardGuard]},
       { path: 'business-unit', component: BusinessUnitComponent, canActivate: [AdminGuardGuard], canDeactivate : [AdminGuardGuard] },
    ]
  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
