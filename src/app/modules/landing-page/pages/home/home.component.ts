import { ViewportScroller } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  pageYoffset = 0;
  @HostListener('window:scroll', ['$event']) onScroll(event) {
    this.pageYoffset = window.pageYOffset;
  }
  constructor(private scroll: ViewportScroller) { }

  ngOnInit(): void {
  }

  scrollToTop() {
    this.scroll.scrollToPosition([0, 0]);
  }

}
