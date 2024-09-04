import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-partner-carousel',
  templateUrl: './partner-carousel.component.html',
  styleUrls: ['./partner-carousel.component.scss']
})
export class PartnerCarouselComponent {
  partnerImages = [
    '/assets/images/verdari-img/t1.svg',
    '/assets/images/verdari-img/t2.svg',
    '/assets/images/verdari-img/t3.svg',
    '/assets/images/verdari-img/t4.svg',
    '/assets/images/verdari-img/t5.svg',
    '/assets/images/verdari-img/t6.svg',
    '/assets/images/verdari-img/t7.svg',
    '/assets/images/verdari-img/t8.svg',
  ];


}
