import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public navegation: string = "ABOUTME";
  public menuOptions = [];
  constructor() {
    this.menuOptions = [
      { label: "ABOUTME", url: "/landing-page/home", hide: false },
      { label: "SKILLS", url: "/landing-page/skill", hide: false },
      // { label: "EXPERIENCE", url: "/landing-page/work-experience", hide: true },
      { label: "PROJECTS", url: "/landing-page/projects", hide: false },
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
