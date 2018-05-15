import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { routes } from './app.routes';
import { MainModule } from './main/main.module';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ServicesModule } from './services/services.module';
import { SharedModule } from './shared/shared.module';
import { BaseRequestOptions, Http } from "@angular/http";
import { LoadingbarComponent } from './shared/loadingbar/loadingbar.component';
import { PipesModule  } from './pipes/pipes.module';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material';
import {FlexLayoutModule} from "@angular/flex-layout";
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { reducers, metaReducers, logger } from './state/app.reducer';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { resource } from 'selenium-webdriver/http';
import { EffectsModule } from '@ngrx/effects';
import { LoadTier1UserList } from './state/effects/loadtier1userlist';
import { LoadTier1} from './state/effects/loadtier1';
import { PersonalDetails} from './state/effects/personal-details';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FormsModule,
    MainModule,   
    LoginModule,
    NgxDatatableModule,
    BrowserModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatInputModule,
    NoopAnimationsModule,
    HttpModule,
    ServicesModule.forRoot(), 
    StoreModule.forRoot(reducers ,{metaReducers}),
    EffectsModule.forRoot([LoadTier1,PersonalDetails, LoadTier1UserList]),
    StoreDevtoolsModule.instrument({
      maxAge: 5
    }),
    SharedModule,
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, useHash: false, enableTracing: true })

  ],
  providers: [   
  ],
  entryComponents: [LoadingbarComponent],

  bootstrap: [AppComponent]
})
export class AppModule { }
