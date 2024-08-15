import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestoreExpenseComponent } from './restore-expense.component';

describe('RestoreExpenseComponent', () => {
  let component: RestoreExpenseComponent;
  let fixture: ComponentFixture<RestoreExpenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestoreExpenseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RestoreExpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
