import { AfterViewInit, Component } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-rating-info',
  templateUrl: './rating-info.component.html',
  styleUrl: './rating-info.component.css'
})
export class RatingInfoComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    this.animateCounter('#downloads-counter', 300, 2);
    this.animateCounter('#trips-counter', 200, 2);
    this.animateCounter('#expenses-counter', 4842, 2);
    this.animateCounter('#members-counter', 300, 2);
    this.animateCounter('#ads-counter', 0, 2);
  }

  animateCounter(element: string, endValue: number, duration: number): void {
    gsap.to(element, {
      innerText: endValue,
      duration: duration,
      ease: 'power1.in',
      onUpdate: function () {
        const target = document.querySelector(element);
        if (target) {
          target.innerHTML = Math.round(parseFloat(target.innerHTML || '0')).toString();
        }
      }
    });
  }
}
