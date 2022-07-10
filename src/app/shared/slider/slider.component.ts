import { Component, Input, OnInit } from '@angular/core';
import SwiperCore, { SwiperOptions, EffectCoverflow, Autoplay, Pagination } from 'swiper';

SwiperCore.use([EffectCoverflow, Autoplay, Pagination]);
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  @Input() files : String[];
  config: SwiperOptions = {
    pagination: { clickable: true },
    scrollbar: { draggable: true },
    autoplay: {
      delay: 3000
    },
    loop: true,
    effect: 'coverflow'
  };
  constructor() { }

  ngOnInit(): void {
  }

  clickFile() {
    console.log("Entra")
  }
}
