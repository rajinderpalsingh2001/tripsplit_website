import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackExpenseChangesComponent } from './track-expense-changes.component';

describe('TrackExpenseChangesComponent', () => {
  let component: TrackExpenseChangesComponent;
  let fixture: ComponentFixture<TrackExpenseChangesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrackExpenseChangesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrackExpenseChangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
