import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RoutingPath } from "./configs/routing-path";
import { MainLayoutComponent } from "./layouts/main-layout/main-layout.component";
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
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
