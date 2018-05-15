import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { SharedModule} from '../shared/shared.module';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { LoginDetailsComponent} from './login-details/login-details.component';
import {LoadingbarComponent} from '../shared/loadingbar/loadingbar.component';
import { HttpModule } from '@angular/http';
import { LoginSpinningBarModalComponent } from '../modals/login-spinning-bar-modal/login-spinning-bar-modal.component';
import { RegisterComponent } from './register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material';
import {MatButtonModule} from '@angular/material';
import {MatCardContent } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { MatCheckboxModule ,MatSelectModule ,MatGridListModule,MatInputModule,MatIconModule} from '@angular/material';
import {MatDialogModule} from '@angular/material';
import {MatProgressSpinnerModule} from '@angular/material';
import {MatSnackBarModule} from '@angular/material';
//import { ServicesModule } from '../services/services.module';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    SharedModule,
    FormsModule,    
    ReactiveFormsModule,
    MatSnackBarModule,
    MatCardModule,
    MatCheckboxModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatGridListModule,
    MatGridListModule,
    MatInputModule,
    MatDialogModule,
   // ServicesModule,
    MatIconModule,
  ],
  providers: [ ],
  exports:[ RegisterComponent],
  declarations: [LoginComponent, LoginDetailsComponent,RegisterComponent],
  entryComponents:[LoginSpinningBarModalComponent],
})
export class LoginModule { }
