import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripMembersComponent } from './trip-members.component';

describe('TripMembersComponent', () => {
  let component: TripMembersComponent;
  let fixture: ComponentFixture<TripMembersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TripMembersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TripMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
