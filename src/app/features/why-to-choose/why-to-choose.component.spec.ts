import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyToChooseComponent } from './why-to-choose.component';

describe('WhyToChooseComponent', () => {
  let component: WhyToChooseComponent;
  let fixture: ComponentFixture<WhyToChooseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhyToChooseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WhyToChooseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
