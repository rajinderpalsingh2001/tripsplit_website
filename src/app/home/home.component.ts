import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home',  
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  redirectToPlayStore() {
    window.location.href = 'https://play.google.com/store/apps/details?id=com.bydeveloper.tripsplit';
  }

  redirectToWebApp() {
    window.location.href = 'https://app.tripsplit.in';
  }
}