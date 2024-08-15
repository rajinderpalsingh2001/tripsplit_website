import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LockUnlockTripComponent } from './lock-unlock-trip.component';

describe('LockUnlockTripComponent', () => {
  let component: LockUnlockTripComponent;
  let fixture: ComponentFixture<LockUnlockTripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LockUnlockTripComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LockUnlockTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
