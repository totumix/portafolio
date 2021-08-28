import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {
  public navegation: string = "ABOUTME";
  public menuOptions = [];
  constructor() {
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

  onChange() { }

  selectNavegation(string: string) {
    this.navegation = string;
  }
}
