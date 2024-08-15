import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { VideoModalComponent } from '../../shared/video-modal/video-modal.component';
import { WhyToChooseComponent } from '../why-to-choose/why-to-choose.component';
import { ReviewsComponent } from '../reviews/reviews.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, WhyToChooseComponent, ReviewsComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  // @ViewChild('iframeContainer', { static: true }) iframeContainer!: ElementRef;
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