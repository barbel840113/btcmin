import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {NgbModule, NgbAccordionConfig ,NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { TransactionsComponent } from './transactions.component';
import { routerTransition } from '../../router.animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('TransactionsComponent', () => {
  let component: TransactionsComponent;
  let fixture: ComponentFixture<TransactionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[NgbModule.forRoot(),BrowserAnimationsModule],
      providers:[NgbActiveModal],      
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
