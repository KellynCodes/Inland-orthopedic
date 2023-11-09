import { Component, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css'],
})
export class TestimonialsComponent {
  testimonials = [
    {
      name: 'John Doe',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      avatar: 'assets/images/slide-1.jpg',
      title: 'Software Engineer',
    },
    {
      name: 'Jane Smith',
      text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      avatar: 'assets/images/slide-2.jpg',
      title: 'Product Designer',
    },
    {
      name: 'John Doe',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      avatar: 'assets/images/slide-3.jpg',
      title: 'Product Designer',
    },
    {
      name: 'Jane Smith',
      text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      avatar: 'assets/images/slide-1.jpg',
      title: 'Product Designer',
    },
  ];

  public swiperConfig: SwiperOptions = {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    slidesPerView: 'auto',
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },

      1200: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
    },
  };
}
