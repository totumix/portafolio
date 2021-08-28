import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { LandingPageRoutingModule } from './landing-page-routing.module';
import { SkillComponent } from './pages/skill/skill.component';
import { ContactComponent } from './pages/contact/contact.component';
import { WorkExperienceComponent } from './pages/work-experience/work-experience.component';
import { ProjectsComponent } from './pages/projects/projects.component';

@NgModule({
  declarations: [
    HomeComponent,
    SkillComponent,
    ContactComponent,
    WorkExperienceComponent,
    ProjectsComponent,
  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule
  ],
  exports: [
    ProjectsComponent
  ]
})
export class LandingPageModule { }
