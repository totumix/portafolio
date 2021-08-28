import { Routes, RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { HomeComponent } from './pages/home/home.component';
import { RoutingPath } from '../../configs/routing-path';
import { SkillComponent } from './pages/skill/skill.component';
import { WorkExperienceComponent } from './pages/work-experience/work-experience.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProjectsComponent } from './pages/projects/projects.component';
const routes: Routes = [
    {
        path: "",
        pathMatch: "prefix",
        canActivate: [],
        children: [
            {
                path: RoutingPath.appRouting.components.landing_page.pages.home.path,
                component: HomeComponent
            },
            {
                path: RoutingPath.appRouting.components.landing_page.pages.skill.path,
                component: SkillComponent
            },
            {
                path: RoutingPath.appRouting.components.landing_page.pages.work_experience.path,
                component: WorkExperienceComponent
            },
            {
                path: RoutingPath.appRouting.components.landing_page.pages.contact.path,
                component: ContactComponent
            },
            {
                path: RoutingPath.appRouting.components.landing_page.pages.projects.path,
                component: ProjectsComponent,
            },
        ]
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LandingPageRoutingModule { }