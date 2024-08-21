import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { VideoModalComponent } from '../../../../shared/video-modal/video-modal.component';

@Component({
  selector: 'app-download-ios-btn',
  templateUrl: './download-ios-btn.component.html',
  styleUrl: './download-ios-btn.component.css'
})
export class DownloadIosBtnComponent {
  constructor(private dialog: MatDialog){}

  openVideoModal() {
    this.dialog.open(VideoModalComponent, {
      width: '80%',
      height: '80%'
    });
  }
}
