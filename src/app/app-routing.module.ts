import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RoutingPath } from "./configs/routing-path";
import { MainLayoutComponent } from "./layouts/main-layout/main-layout.component";
import { ProjectLayoutComponent } from "./layouts/project-layout/project-layout.component";
//COMPONENTS
const routes: Routes = [
  {
    path: "",
    redirectTo:
      RoutingPath.appRouting.components.landing_page.path +
      "/" +
      RoutingPath.appRouting.components.landing_page.pages.home.path,
    pathMatch: "full"
  },
  {
    path: RoutingPath.appRouting.components.landing_page.path,
    component: MainLayoutComponent,
    loadChildren: () =>
      import('./modules/landing-page/landing-page.module').then((m) => m.LandingPageModule)
  },
  {
    path: RoutingPath.appRouting.components.project.path,
    component: ProjectLayoutComponent,
    loadChildren: () =>
      import('./modules/project/project.module').then((m) => m.ProjectModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
