import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FaqComponent } from './faq/faq.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { HowToUseComponent } from './how-to-use/how-to-use.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { WhyToChooseComponent } from './why-to-choose/why-to-choose.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DeleteAccountStepsComponent } from './delete-account-steps/delete-account-steps.component';
import { DownloadIosBtnComponent } from './home/components/download-ios-btn/download-ios-btn.component';
import { DownloadAndroidBtnComponent } from './home/components/download-android-btn/download-android-btn.component';
import { MobileDemoFrameComponent } from './home/components/mobile-demo-frame/mobile-demo-frame.component';
import { RatingInfoComponent } from './home/components/rating-info/rating-info.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent,
    ContactUsComponent,
    FaqComponent,
    FooterComponent,
    HowToUseComponent,
    PrivacyPolicyComponent,
    ReviewsComponent,
    WhyToChooseComponent,
    DeleteAccountStepsComponent,
    DownloadIosBtnComponent,
    DownloadAndroidBtnComponent,
    MobileDemoFrameComponent,
    RatingInfoComponent,
  ],
  imports: [
    CommonModule,
    SlickCarouselModule,
    MatButtonModule,
    SharedModule,
    MatIconModule,
  ]
})
export class FeaturesModule { }
