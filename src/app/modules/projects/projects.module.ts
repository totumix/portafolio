import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RoutingPath } from 'src/app/configs/routing-path';
import { ProjectsComponent } from './projects.component';
import { ProjectDetailsComponent } from './pages/project-details/project-details.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { ProjectsLayoutComponent } from './pages/projects-layout/projects-layout.component';

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
        component: ProjectsLayoutComponent
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
    ProjectDetailsComponent,
    ProjectListComponent,
    ProjectsLayoutComponent
  ],
  imports: [
    CommonModule,
    IvyCarouselModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    ProjectListComponent
  ]
})
export class ProjectsModule { }
