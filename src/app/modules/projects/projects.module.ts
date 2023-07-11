import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RoutingPath } from 'src/app/configs/routing-path';
import { ProjectsComponent } from './projects.component';
import { ProjectDetailsComponent } from './pages/project-details/project-details.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { ProjectsLayoutComponent } from './pages/projects-layout/projects-layout.component';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { ArticlesModule } from '../articles/articles.module';

const routes: Routes = [
  {

    path: "",
    component: ProjectsComponent,
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
    TranslateModule,
    SharedModule,
    ArticlesModule,
    RouterModule.forChild(routes)
  ],
  providers: [ ],
  exports: [
    ProjectListComponent
  ]
})
export class ProjectsModule { }
