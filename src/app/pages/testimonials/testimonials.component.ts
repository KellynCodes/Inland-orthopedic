import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Component } from '@angular/core';
import { SwiperOptions } from 'swiper/types';
import { SwiperDirective } from '../../directives/swiper.directive';

@Component({
  selector: 'sobol-testimonials',
  standalone: true,
  imports: [CommonModule, SwiperDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css',
})
export class TestimonialsComponent {
  testimonials: TestimonialDto[] = [
    {
      id: 1,
      name: 'Lisa Me',
      text: 'Outstanding care at Sobol Orthopedic! From diagnosis to recovery, the team provided exceptional support during my spine treatment. Their commitment to patient well-being is unmatched. Thank you for giving me my mobility back!',
      avatar: 'assets/images/slide-1.jpg',
      title: 'Advanced Spine Surgery and Comprehensive Treatment',
    },
    {
      id: 2,
      name: 'Mike S',
      text: "I can't express my gratitude enough to Sobol Orthopedic. After a sports injury, their sports medicine specialists guided me through a personalized treatment plan, combining innovative therapies and rehabilitation exercises. The comprehensive approach and cutting-edge techniques made all the difference in my recovery",
      avatar: 'assets/images/slide-2.jpg',
      title: 'Personalized Sports Medicine Plan and Rehabilitation',
    },
    {
      id: 3,
      name: 'Emily B.',
      text: 'My experience with Sobol Orthopedic exceeded expectations. Their focus on rehabilitation and personalized physical therapy significantly improved my recovery from a musculoskeletal issue. I recommend Sobol to anyone seeking top-tier orthopedic care.',
      avatar: 'assets/images/slide-3.jpg',
      title: 'Personalized Rehabilitation and Physical Therapy',
    },
    {
      id: 4,
      name: 'Robert H.',
      text: "Choosing Sobol Orthopedic was the best decision for my hip replacement. The surgeons and support staff provided unparalleled expertise and kindness. Today, I enjoy an active lifestyle, all thanks to Sobol's top-notch orthopedic care.",
      avatar: 'assets/images/slide-1.jpg',
      title: 'Successful Hip Replacement',
    },

    {
      id: 5,
      name: 'David L.',
      text: 'Sobol Orthopedic Medical Group is a beacon of excellence. They successfully addressed my joint issues with precision and care. The friendly staff and state-of-the-art facilities made my orthopedic journey seamless and comfortable',
      avatar: 'assets/images/slide-1.jpg',
      title: 'Immediate Orthopedic Trauma Care and Rehabilitation',
    },
  ];

  public swiperConfig: SwiperOptions = {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      clickable: true,
      el: '.swiper-pagination',
      type: 'bullets',
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

interface TestimonialDto {
  id: number;
  name: string;
  text: string;
  avatar: string;
  title: string;
}
