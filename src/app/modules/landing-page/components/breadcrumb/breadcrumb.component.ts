import { Component, OnInit } from '@angular/core';
import { filter, distinctUntilChanged } from 'rxjs/operators';
import { Router,NavigationEnd, Event, ActivatedRoute } from '@angular/router';
import { ConstRoutesService } from 'src/app/configs/const-routes.service';
import { IBreadCrumb } from './breadcrumb.interface';
@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {
  public breadcrumbs: IBreadCrumb[]
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public _constRoutes: ConstRoutesService
  ) {
    console.log(this.activatedRoute.root)
    this.breadcrumbs = this.buildBreadCrumb(this.activatedRoute.root);
  }

  ngOnInit() {
    this.router.events.pipe(
      filter((event: Event) => event instanceof NavigationEnd),
      distinctUntilChanged(),
    ).subscribe(() => {
      this.breadcrumbs = this.buildBreadCrumb(this.activatedRoute.root);
    })
  }

  /**
   * Recursively build breadcrumb according to activated route.
   * @param route
   * @param url
   * @param breadcrumbs
   */
  buildBreadCrumb(route: ActivatedRoute, url: string = '', breadcrumbs: IBreadCrumb[] = []): IBreadCrumb[] {
    //If no routeConfig is avalailable we are on the root path
    let label = route.routeConfig && route.routeConfig.data ? route.routeConfig.data.breadcrumb : '';
    let isClickable = route.routeConfig && route.routeConfig.data && route.routeConfig.data.isClickable;
    let path = route.routeConfig && route.routeConfig.data ? route.routeConfig.path : '';
    let finalBreadCrumb = []

    // If the route is dynamic route such as ':id', remove it
    const lastRoutePart = path.split('/').pop();
    const isDynamicRoute = lastRoutePart.startsWith(':');
    if (isDynamicRoute && !!route.snapshot) {
      const paramName = lastRoutePart.split(':')[1];
      path = path.replace(lastRoutePart, route.snapshot.params[paramName]);
      // label = route.snapshot.params[paramName];
    }

    //In the routeConfig the complete path is not available,
    //so we rebuild it each time
    const nextUrl = path ? `${url}/${path}` : url;

    const breadcrumb: IBreadCrumb = {
      label: label,
      url: nextUrl,
    };
    breadcrumbs.forEach(breadTemp => {
      finalBreadCrumb.push(breadTemp)
    })
    if (breadcrumb.label) {
      finalBreadCrumb.push(breadcrumb);
    }
    // Only adding route with non-empty label
    const newBreadcrumbs = finalBreadCrumb;
    if (route.firstChild) {
      //If we are not on our current path yet,
      //there will be more children to look after, to build our breadcumb
      return this.buildBreadCrumb(route.firstChild, nextUrl, newBreadcrumbs);
    }
    console.log(newBreadcrumbs)
    return newBreadcrumbs;
  }

  goUrl(url) {
    console.log(url)
    if (url == `/${this._constRoutes.landingModuleUrl}`) {
      this.router.navigate([`${url}/${this._constRoutes.landingHomeUrl}`]);
    } else {
      this.router.navigate([url]);
    }
  }
}