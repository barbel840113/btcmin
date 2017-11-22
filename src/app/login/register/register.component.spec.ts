import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginModule } from '../login.module';
import { RegisterComponent } from './register.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { ToasterModule, ToasterService } from 'angular2-toaster';
import { RouterTestingModule } from "@angular/router/testing";
import { Router } from "@angular/router";
import { routes } from '../../app.routes';
import { ServicesModule } from '../../services/services.module';
import { AccountService } from '../../services/account/account.service';
import { StoreModule } from '@ngrx/store';
import { appReducer } from '../../app.store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let location: Location;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        //RegisterComponent
      ],
      imports: [
        FormsModule,
        LoginModule,
        RouterTestingModule.withRoutes(routes),
        ToasterModule,
        SharedModule,
        BrowserAnimationsModule,
        ServicesModule.forRoot(),
        ReactiveFormsModule,
        StoreModule.provideStore(appReducer)
      ],
      
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
  
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should create', async () => {
    // component.onSubmit();
    expect(component).toBeTruthy();
  });

  it('should create register form with 12 controls', async () => {
    //create register form
    component.createRegisterForm();
    //check if the register form is defined
    expect(component.registerForm).toBeDefined();
    //check the lenght of the properties on register Form Controll should be 12
    let value = Object.keys(component.registerForm);
    expect(value.length).toBe(12);
  });

  it('should create user in the system', async() =>{
    //create register form
    component.createRegisterForm();
    let accservice =TestBed.get(AccountService);
    expect(accservice).toBeDefined();
    component.registerForm.controls.password.setValue('P@ssword1');
    component.registerForm.controls.email.setValue('sivakmichal@gmail');
    component.onSubmit();
  });
});
