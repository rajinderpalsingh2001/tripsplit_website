import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-video-modal',
  templateUrl: './video-modal.component.html',
  styleUrl: './video-modal.component.css'
})
export class VideoModalComponent {

  constructor(public dialogRef: MatDialogRef<VideoModalComponent>) {}

  close(): void {
    this.dialogRef.close();
  }

  redirectToWebApp() {
    window.location.href = 'https://app.tripsplit.in';
  }
}
