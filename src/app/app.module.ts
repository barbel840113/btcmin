import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { routes } from './app.routes';
import { MainModule } from './main/main.module';
import { AppService } from './app.service';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ServicesModule } from './services/services.module';
import { SharedModule } from './shared/shared.module';
import { BaseRequestOptions, Http } from "@angular/http";
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemHeroService } from './services/heroes/in-memory-data.service';
import { LoadingbarComponent } from './shared/loadingbar/loadingbar.component';
import { PipesModule  } from './pipes/pipes.module';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material';
import {FlexLayoutModule} from "@angular/flex-layout";
import { NgxDatatableModule } from '@swimlane/ngx-datatable';


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
    SharedModule,
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, useHash: false, enableTracing: true })

  ],
  providers: [
    AppService,   
  ],
  entryComponents: [LoadingbarComponent],

  bootstrap: [AppComponent]
})
export class AppModule { }
