import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { HttpModule, JsonpModule } from '@angular/http';
import { SharedModule} from '../shared/shared.module';
import { SettingsComponent } from './settings/settings.component';
import { PipesModule  } from '../pipes/pipes.module';
import { SidebarModule } from 'ng-sidebar';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {ToasterModule,} from 'angular2-toaster';
import {ServicesModule  } from '../services/services.module';
import {MatSidenavModule,MatSnackBarModule,MatCardModule,MatCheckboxModule, MatProgressSpinnerModule, 
  MatButtonModule,MatSelectModule, MatGridListModule,MatInputModule, MatToolbarModule, MatDialogModule,MatIconModule} from '@angular/material';
import {LayoutModule} from '@angular/cdk/layout';
import {FullscreenOverlayContainer, OverlayContainer,} from '@angular/cdk/overlay';
import { MatHelpModule } from '../mat-help/mat-help.module';
import { BusinessUnitComponent } from './business-unit/business-unit.component';
import { MessageFormComponent } from '../shared/message-form/message-form.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { UserOverviewComponent } from './admin/user-overview/user-overview.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import { PersonalDetailsComponent } from './settings/personal-details/personal-details.component';
import { UserService } from '../services/users/user.service';
import { Tier1Component } from './settings/tier1/tier1.component';
import { AdminGuardGuard} from '../guards/admin-guard';
import { NotadminGuard} from '../guards/notadmin.guard';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    HttpModule,
    JsonpModule,
    SharedModule,
    PipesModule,
    FlexLayoutModule,
    MatHelpModule,
    NgxDatatableModule
  //  SidebarModule.forRoot(),
  ],
  declarations: [
    MainComponent,
    SettingsComponent,
    DashboardComponent,
    TransactionsComponent,
    BusinessUnitComponent,
    UserOverviewComponent,
    PersonalDetailsComponent,
    Tier1Component
  ],
  exports: [
    MainComponent,
    SettingsComponent,
    DashboardComponent,
    TransactionsComponent,
    BusinessUnitComponent,
    UserOverviewComponent,
    PersonalDetailsComponent
  ],
  providers:[ {provide: OverlayContainer, useClass: FullscreenOverlayContainer}, UserService, AdminGuardGuard, NotadminGuard],
  entryComponents:[MessageFormComponent]
})

export class MainModule {
}
