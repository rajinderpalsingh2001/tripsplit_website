import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAccountStepsComponent } from './delete-account-steps.component';

describe('DeleteAccountStepsComponent', () => {
  let component: DeleteAccountStepsComponent;
  let fixture: ComponentFixture<DeleteAccountStepsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteAccountStepsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteAccountStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
