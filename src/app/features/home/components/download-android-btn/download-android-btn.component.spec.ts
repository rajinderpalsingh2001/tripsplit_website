import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadAndroidBtnComponent } from './download-android-btn.component';

describe('DownloadAndroidBtnComponent', () => {
  let component: DownloadAndroidBtnComponent;
  let fixture: ComponentFixture<DownloadAndroidBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DownloadAndroidBtnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DownloadAndroidBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
