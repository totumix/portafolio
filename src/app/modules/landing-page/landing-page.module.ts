import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { LandingPageRoutingModule } from './landing-page-routing.module';
import { SkillComponent } from './pages/skill/skill.component';
import { ContactComponent } from './pages/contact/contact.component';
import { WorkExperienceComponent } from './pages/work-experience/work-experience.component';
import { LandingPageComponent } from './landing-page.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SkillsListComponent } from './components/skills-list/skills-list.component';

@NgModule({
  declarations: [
    HomeComponent,
    SkillComponent,
    ContactComponent,
    WorkExperienceComponent,
    LandingPageComponent,
    HeaderComponent,
    FooterComponent,
    SkillsListComponent
  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule
  ]
})
export class LandingPageModule { }
