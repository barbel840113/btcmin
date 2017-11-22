import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginSpinningBarModalComponent } from './login-spinning-bar-modal.component';

describe('LoginSpinningBarModalComponent', () => {
  let component: LoginSpinningBarModalComponent;
  let fixture: ComponentFixture<LoginSpinningBarModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginSpinningBarModalComponent ],
    })
    .compileComponents()
    .then(() =>{
      
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginSpinningBarModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
