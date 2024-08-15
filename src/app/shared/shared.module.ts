import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileFrameComponent } from './components/mobile-frame/mobile-frame.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { VideoModalComponent } from './video-modal/video-modal.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    MobileFrameComponent,
    NavbarComponent,
    VideoModalComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
  ],
  exports: [
    MobileFrameComponent,
    NavbarComponent,
    VideoModalComponent
  ]
})
export class SharedModule { }
