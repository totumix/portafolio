import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { RoutingPath } from './routing-path';

@Injectable({
  providedIn: 'root'
})
export class ConstRoutesService {
  //Landing
  public landingModuleUrl = RoutingPath.appRouting.components.landing_page.path;
  public landingHomeUrl = RoutingPath.appRouting.components.landing_page.pages.home.path;
  public landingSkillsUrl = RoutingPath.appRouting.components.landing_page.pages.skill.path;
  public landingExperiencesUrl = RoutingPath.appRouting.components.landing_page.pages.work_experience.path;
  public landingContactUrl = RoutingPath.appRouting.components.landing_page.pages.contact.path;
  private route = new BehaviorSubject(this.router.url);
  actualRoute = this.route.asObservable();

  constructor(private router: Router) {
  }

  changeRoute(route) {
    this.route.next(route)
  }

}
