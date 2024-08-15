import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [SlickCarouselModule, CommonModule],
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent {
  reviews = [
    {
      user: "Devang Chopra",
      text: "Great experience!!",
      rating: 5,
    },
    {
      user: "Anshu Priya",
      text: "It's a great application. It really helped me a lot in managing my trips.",
      rating: 5,
    },
    {
      user: "Ashwinder Singh",
      text: "This application is incredibly useful for dividing expenses during trips.",
      rating: 5,
    },
    {
      user: "Mayank Singh",
      text: "Fantastic App for Trip Expenses✨ I've been using this app for a while, and it has made splitting trip expenses with friends so much easier! The interface is user-friendly, and it handles everything from accommodations to meals effortlessly. No more awkward calculations or chasing people for payments. I love the ability to track expenses in real time and settle up quickly. This app is a must-have for anyone who travels with friends or family. Highly recommended!❤️",
      rating: 5,
    },
    {
      user: "Gurveer Singh",
      text: "TripSplit made splitting expenses on our recent trip effortless! The app is super easy to use, just input your costs, and it fairly divides them among the group. No more awkward money discussions! Highly recommend for anyone traveling with friends or family.",
      rating: 5,
    },
    {
      user: "Dhruv Shingari",
      text: "Absolutely love this bill split app! The interface is clean, intuitive, and user-friendly. It’s saved me so much time and effort. Highly recommend for anyone looking to simplify their group finances!",
      rating: 5,
    },
    {
      user: "Pukhraj Singh",
      text: "Clean and Elegant UI and great app to split expenses with no ads🔥🔥",
      rating: 5,
    },
    {
      user: "Mehtab Singh",
      text: "It's an awesome app, no ads and no waiting time.",
      rating: 5,
    },
    {
      user: "Yuvraj Singh",
      text: "Great App with beginner-friendly UI and also smooth performance 👌 Definitely recommend it for bachelor's trips usually Goa😂",
      rating: 5,
    },
    {
      user: "WizCoderr (Sayam)",
      text: "Fantastic App for Simplifying Group Payments! I recently started using Trip Split, and it has completely transformed how my friends and I handle group expenses, especially when dining out. The interface is clean and intuitive, making it incredibly easy to input bills.",
      rating: 5,
    },
    {
      user: "Noor Preet",
      text: "I highly recommend this app, it's a game changer in splitting expenses and well worth the download.",
      rating: 5,
    },
    {
      user: "Abhishek Srivastava",
      text: "Great UI. Best part is there are no ads.",
      rating: 5,
    },
    {
      user: "Vaibhav Arora",
      text: "Amazing App, UI is just amazing, saves a lot of time in splitting the expenses among friends, and especially without any ads.",
      rating: 5,
    },
    {
      user: "Sejal Sharma",
      text: "Great work! It's so easy to use and takes away all the headache of splitting bills!",
      rating: 5,
    }
  ];
  
  
  slideConfig = {
    slidesToShow: 3, 
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };
  

  generateRatingStars(rating: number): boolean[] {
    return Array(5).fill(false).map((_, i) => i < rating);
  }

  slickInit(e: any) {
    console.log('slick initialized', e);
  }

  breakpoint(e: any) {
    console.log('breakpoint', e);
  }

  afterChange(e: any) {
    console.log('afterChange', e);
  }

  beforeChange(e: any) {
    console.log('beforeChange', e);
  }
}
