import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectRoutingModule } from './project-routing.module';
import { ProjectDetailsComponent } from './pages/project-details/project-details.component';
import { SliderComponent } from './components/slider/slider.component';


@NgModule({
  declarations: [
    ProjectDetailsComponent,
    SliderComponent
  ],
  imports: [
    CommonModule,
    ProjectRoutingModule,
  ]
})
export class ProjectModule { }
