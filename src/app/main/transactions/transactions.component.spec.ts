import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TransactionsComponent } from './transactions.component';
import { routerTransition } from '../../router.animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('TransactionsComponent', () => {
  let component: TransactionsComponent;
  let fixture: ComponentFixture<TransactionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[BrowserAnimationsModule],
      providers:[],      
      declarations: [ TransactionsComponent ]
    })
    .compileComponents()
    .then(() =>{
    
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionsComponent);    
    component = fixture.componentInstance;    
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();    
  });
});
