import { ViewportScroller } from '@angular/common';
import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  public navegation: string = "ABOUTME";
  public menuOptions = [];
  pageYoffset = 0;
  @HostListener('window:scroll', ['$event']) onScroll(event) {
    this.pageYoffset = window.pageYOffset;
  }

  constructor(private scroll: ViewportScroller) {
    this.menuOptions = [
      { label: "ABOUTME", url: "/landing-page/home", hide: false },
      { label: "SKILLS", url: "/landing-page/skill", hide: false },
      { label: "WORK EXPERIENCE", url: "/landing-page/work-experience", hide: false },
      { label: "PROJECTS", url: "/landing-page/projects", hide: true },
      { label: "CONTACT", url: "/landing-page/contact", hide: false },
    ]
  }


  ngOnInit(): void {
  }

  scrollToTop() {
    this.scroll.scrollToPosition([0, 0]);
  }
  
  selectNavegation(string: string) {
    this.navegation = string;
  }

}
