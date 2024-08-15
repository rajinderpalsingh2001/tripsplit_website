import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { SharedModule } from './shared/shared.module';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, MatDialogModule, SharedModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Trip Split';
}
