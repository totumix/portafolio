import { ViewportScroller } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { ConstRoutesService } from 'src/app/configs/const-routes.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  public navegation: string = "ABOUTME";
  public menuOptions = [];
  public hideHomeBreadCrumb: boolean;
  pageYoffset = 0;
  currentRoute: string;
  @HostListener('window:scroll', ['$event']) onScroll(event) {
    this.pageYoffset = window.pageYOffset;
  }

  constructor(
    private scroll: ViewportScroller,
    public _constRoutes: ConstRoutesService,
  ) { }


  ngOnInit(): void {
    console.log("entra")
    this._constRoutes.actualRoute.subscribe(actualRoute => {
      this.hideHomeBreadCrumb = this.showBreadCrumb(actualRoute);
    })
    this.menuOptions = [
      { label: "ABOUTME", url: `${this._constRoutes.landingModuleUrl}/${this._constRoutes.landingHomeUrl}`, hide: false },
      { label: "SKILLS", url: `${this._constRoutes.landingModuleUrl}/${this._constRoutes.landingSkillsUrl}`, hide: false },
      { label: "WORK EXPERIENCE", url: `${this._constRoutes.landingModuleUrl}/${this._constRoutes.landingExperiencesUrl}`, hide: false },
      { label: "PROJECTS", url: `${this._constRoutes.landingModuleUrl}/${this._constRoutes.landingProjectsUrl}`, hide: true },
      { label: "CONTACT", url: `${this._constRoutes.landingModuleUrl}/${this._constRoutes.landingContactUrl}`, hide: false },
    ]
  }

  scrollToTop() {
    this.scroll.scrollToPosition([0, 0]);
  }

  selectNavegation(string: string) {
    this.navegation = string;
  }

  showBreadCrumb(url) {
    return url == `/${this._constRoutes.landingModuleUrl}/${this._constRoutes.landingHomeUrl}` ? true : false;
  }

}
