import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mobile-frame',
  templateUrl: './mobile-frame.component.html',
  styleUrl: './mobile-frame.component.css'
})
export class MobileFrameComponent {
  @Input() src!: string;
}
