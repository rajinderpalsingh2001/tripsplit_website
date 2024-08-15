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

@NgModule({
  declarations: [
    ContactUsComponent,
    FaqComponent,
    FooterComponent,
    HomeComponent,
    HowToUseComponent,
    PrivacyPolicyComponent,
    ReviewsComponent,
    WhyToChooseComponent,
  ],
  imports: [
    CommonModule,
  ]
})
export class FeaturesModule { }
