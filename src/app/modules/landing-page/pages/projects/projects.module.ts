import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RoutingPath } from 'src/app/configs/routing-path';
import { ProjectsComponent } from './projects.component';
import { ProjectsListComponent } from './pages/projects-list/projects-list.component';
import { ProjectDetailsComponent } from './pages/project-details/project-details.component';

const routes: Routes = [
  {

    path: "",
    component: ProjectsComponent,
    data: {
      breadcrumb: RoutingPath.appRouting.components.landing_page.pages.projects.breadcrumb
    },
    children: [
      {
        path: "",
        component: ProjectsListComponent
      },
      {
        path: RoutingPath.appRouting.components.landing_page.pages.projects.pages.project_details.path,
        component: ProjectDetailsComponent,
        data: {
          breadcrumb: RoutingPath.appRouting.components.landing_page.pages.projects.pages.project_details.breadcrumb
        }
      }
    ]
  },
]

@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectsListComponent,
    ProjectDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ProjectsModule { }
