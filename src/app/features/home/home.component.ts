import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { VideoModalComponent } from '../../shared/video-modal/video-modal.component';
import gsap from 'gsap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {
  keywords = ['Transparency.', 'No Ads.', 'No Limits.', 'ease.'];
  currentIndex = 0;
  typingSpeed = 100;
  deletingSpeed = 50;
  delayBetweenWords = 1000;

  ngAfterViewInit(): void {
    this.typeWord();
  }

  typeWord(): void {
    const wordElement = document.getElementById('typewriter-word')!;
    const currentWord = this.keywords[this.currentIndex];
    let charIndex = 0;

    const type = () => {
      if (charIndex < currentWord.length) {
        wordElement.textContent += currentWord.charAt(charIndex);
        charIndex++;
        setTimeout(type, this.typingSpeed);
      } else {
        setTimeout(() => this.deleteWord(), this.delayBetweenWords);
      }
    };

    type();
  }

  deleteWord(): void {
    const wordElement = document.getElementById('typewriter-word')!;
    const currentWord = this.keywords[this.currentIndex];
    let charIndex = currentWord.length;

    const deleteChar = () => {
      if (charIndex > 0) {
        wordElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
        setTimeout(deleteChar, this.deletingSpeed);
      } else {
        this.currentIndex = (this.currentIndex + 1) % this.keywords.length;
        this.typeWord();
      }
    };

    deleteChar();
  }
}