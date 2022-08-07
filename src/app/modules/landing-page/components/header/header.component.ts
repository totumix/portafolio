import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ConstRoutesService } from 'src/app/configs/const-routes.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public navegation: string = "ABOUTME";
  public menuOptions = [];
  constructor(private translate: TranslateService,
    public _constRoutes: ConstRoutesService,
    private router: Router
  ) {
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

  selectNavegation(route: string) {
    this._constRoutes.changeRoute(route)
  }

  changeLanguage(language: string) {
    this.translate.setDefaultLang(language)
  }
}
