import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileDemoFrameComponent } from './mobile-demo-frame.component';

describe('MobileDemoFrameComponent', () => {
  let component: MobileDemoFrameComponent;
  let fixture: ComponentFixture<MobileDemoFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileDemoFrameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MobileDemoFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
