import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadIosBtnComponent } from './download-ios-btn.component';

describe('DownloadIosBtnComponent', () => {
  let component: DownloadIosBtnComponent;
  let fixture: ComponentFixture<DownloadIosBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DownloadIosBtnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DownloadIosBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
