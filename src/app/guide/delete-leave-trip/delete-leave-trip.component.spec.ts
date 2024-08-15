import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteLeaveTripComponent } from './delete-leave-trip.component';

describe('DeleteLeaveTripComponent', () => {
  let component: DeleteLeaveTripComponent;
  let fixture: ComponentFixture<DeleteLeaveTripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteLeaveTripComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteLeaveTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
