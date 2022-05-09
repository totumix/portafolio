import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { LandingPageRoutingModule } from './landing-page-routing.module';
import { SkillComponent } from './pages/skill/skill.component';
import { ContactComponent } from './pages/contact/contact.component';
import { WorkExperienceComponent } from './pages/work-experience/work-experience.component';
import { SliderComponent } from './pages/projects/components/slider/slider.component';
import { LandingPageComponent } from './landing-page.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    HomeComponent,
    SkillComponent,
    ContactComponent,
    WorkExperienceComponent,
    SliderComponent,
    LandingPageComponent,
    BreadcrumbComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule
  ]
})
export class LandingPageModule { }
