import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { LandingPageRoutingModule } from './landing-page-routing.module';
import { SkillComponent } from './pages/skill/skill.component';
import { ContactComponent } from './pages/contact/contact.component';
import { WorkExperienceComponent } from './pages/work-experience/work-experience.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ProjectsListComponent } from './pages/projects/pages/projects-list/projects-list.component';
import { SliderComponent } from './pages/projects/components/slider/slider.component';
import { ProjectDetailsComponent } from './pages/projects/pages/project-details/project-details.component';

@NgModule({
  declarations: [
    HomeComponent,
    SkillComponent,
    ContactComponent,
    WorkExperienceComponent,
    ProjectsComponent,
    ProjectsListComponent,
    SliderComponent,
    ProjectDetailsComponent
  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule
  ]
})
export class LandingPageModule { }
