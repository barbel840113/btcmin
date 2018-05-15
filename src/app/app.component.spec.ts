import { Location } from "@angular/common";
import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { Router } from "@angular/router";
import { AppComponent } from './app.component';
import {  LoginDetailsComponent} from './login/login-details/login-details.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { routes } from './app.routes';
import{  AccountService } from './services/account/account.service';
import { AuthTokenService } from './services/auth-token/auth-token.service';
import {AuthenticationService} from './services/authentication/authentication.service';
import { Store , StoreModule} from '@ngrx/store';
import { NavbarAdminComponent } from './shared/navbar-admin/navbar-admin.component';
import { HeaderAdminComponent} from './shared/header-admin/header-admin.component';
import { FormGroup, FormBuilder,FormsModule, FormControl, FormArray, ReactiveFormsModule } from '@angular/forms';
import {  HttpModule, Response, RequestOptions, RequestMethod, URLSearchParams } from '@angular/http';
import {ServicesModule } from './services/services.module';
import { logger } from './state/app.reducer';
import { reducers, metaReducers } from './state/app.reducer';

xdescribe('Router: App', () => {
  let location: Location;
  let router: Router;
  let fixture;
  let fixtureMain;

  //reate testing module to see if our routing is working
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes),HttpModule,ServicesModule.forRoot(),  
        FormsModule,    StoreModule.forRoot({btcApp : reducers}),, ReactiveFormsModule],
      declarations: [
        AppComponent,
        LoginComponent,
        MainComponent,
        LoginDetailsComponent,
        NavbarAdminComponent,
        HeaderAdminComponent             
      ],
      providers:[AccountService,AuthenticationService,AuthTokenService]
    });

    //get mock test router
    router = TestBed.get(Router);
    //get mock location 
    location = TestBed.get(Location);

    //set up fixture
    fixture = TestBed.createComponent(AppComponent);
    fixtureMain = TestBed.createComponent(LoginComponent);
    router.initialNavigation();

 

  });
    
    //test specification routeing
    //i shoudl to go manin
    xit('navigate to  redirets you to /home', fakeAsync(() => {
      router.navigate(['']);
      tick();
      expect(location.path()).toBe('/home');
    }));
  
  

     //test specification routeing
    //i shoudl to go manin
    xit('navigate to redirets you to /login', fakeAsync(() => {
      router.navigate(['/login']);
      tick();
      expect(location.path()).toBe('/login');
    }));
});



