import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripPdfReportComponent } from './trip-pdf-report.component';

describe('TripPdfReportComponent', () => {
  let component: TripPdfReportComponent;
  let fixture: ComponentFixture<TripPdfReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TripPdfReportComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TripPdfReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
