import { Component } from '@angular/core';

@Component({
  selector: 'app-download-android-btn',
  templateUrl: './download-android-btn.component.html',
  styleUrl: './download-android-btn.component.css'
})
export class DownloadAndroidBtnComponent {
  redirectToPlayStore() {
    window.location.href = 'https://play.google.com/store/apps/details?id=com.bydeveloper.tripsplit';
  }
}
