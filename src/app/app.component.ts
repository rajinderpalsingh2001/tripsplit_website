import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared/shared.module';
import { GuideModule } from './guide/guide.module';
import { FeaturesModule } from './features/features.module';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet, RouterModule, MatDialogModule, SharedModule, GuideModule, FeaturesModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Trip Split';
}
