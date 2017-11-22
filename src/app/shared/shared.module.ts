import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule, JsonpModule } from '@angular/http';
//Shared Components
import {MatDialogModule} from '@angular/material';
import { DynamicFormControlComponent } from './forms/dynamic-form-control.component';
import { DynamicFormComponent } from './forms/dynamic-form.component';
import { ErrorMessageComponent } from './forms/error-message.component';
import { ErrorSummaryComponent } from './forms/error-summary.component';
import { HeaderAdminComponent } from './header-admin/header-admin.component';
import { NavbarAdminComponent } from './navbar-admin/navbar-admin.component';
import { UploadfileComponent } from './uploadfile/uploadfile.component';
import { DndDirective } from './directives/dnd.directive';
import { LoadingbarComponent } from './loadingbar/loadingbar.component';
import { FooterComponent } from './footer/footer.component';
import { LoginSpinningBarModalComponent} from '../modals/login-spinning-bar-modal/login-spinning-bar-modal.component';
import {MatProgressSpinnerModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material';
import  { MatHelpModule } from '../mat-help/mat-help.module';
import { MessageFormComponent } from './message-form/message-form.component';
 
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        HttpModule,
        JsonpModule,
        MatHelpModule,
    ],
    declarations: [
        DynamicFormControlComponent,
        DynamicFormComponent,
        ErrorMessageComponent,
        ErrorSummaryComponent,
        HeaderAdminComponent,
        NavbarAdminComponent,
        UploadfileComponent,
        MessageFormComponent,
        DndDirective,
        LoadingbarComponent,
        FooterComponent,
        LoginSpinningBarModalComponent
    ],
    exports: [
        DynamicFormControlComponent,
        DynamicFormComponent,
        ErrorMessageComponent,
        ErrorSummaryComponent,
        MessageFormComponent,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        HeaderAdminComponent,
        NavbarAdminComponent,
        UploadfileComponent  ,
        DndDirective,
        LoginSpinningBarModalComponent,
        LoadingbarComponent,
        FooterComponent             
    ]


})

export class SharedModule { }