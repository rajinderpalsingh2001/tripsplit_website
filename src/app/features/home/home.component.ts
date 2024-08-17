import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { VideoModalComponent } from '../../shared/video-modal/video-modal.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  constructor(private dialog: MatDialog){}

  redirectToPlayStore() {
    window.location.href = 'https://play.google.com/store/apps/details?id=com.bydeveloper.tripsplit';
  }

  redirectToWebApp() {
    window.location.href = 'https://app.tripsplit.in';
  }

  redirectToDemoWebApp() {
    window.location.href = 'https://demo.tripsplit.in';
  }

  openVideoModal() {
    this.dialog.open(VideoModalComponent, {
      width: '80%',
      height: '80%'
    });
  }


  ngOnInit(): void {
      
  }
  // ngOnInit() {
  //   this.setButtonContainerDimensions();
  //   window.addEventListener('resize', this.setButtonContainerDimensions.bind(this));
  // }

  // setButtonContainerDimensions() {
  //   const height = this.iframeContainer.nativeElement.offsetHeight;
  //   this.iframeContainer.nativeElement.style.maxWidth = `${height * 0.5}px`;
  // } 
}