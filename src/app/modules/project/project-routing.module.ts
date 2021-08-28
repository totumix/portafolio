import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutingPath } from 'src/app/configs/routing-path';
import { ProjectDetailsComponent } from './pages/project-details/project-details.component';

const routes: Routes = [
  {
    path: "",
    pathMatch: "prefix",
    canActivate: [],
    children: [
      {
        path: RoutingPath.appRouting.components.project.pages.project_details.path,
        component: ProjectDetailsComponent
      },
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
