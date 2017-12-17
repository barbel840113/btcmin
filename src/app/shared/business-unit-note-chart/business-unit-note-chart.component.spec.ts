import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessUnitNoteChartComponent } from './business-unit-note-chart.component';

describe('BusinessUnitNoteChartComponent', () => {
  let component: BusinessUnitNoteChartComponent;
  let fixture: ComponentFixture<BusinessUnitNoteChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessUnitNoteChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessUnitNoteChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
