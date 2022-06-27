import { Routes, RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { HomeComponent } from './pages/home/home.component';
import { RoutingPath } from '../../configs/routing-path';
import { SkillComponent } from './pages/skill/skill.component';
import { WorkExperienceComponent } from './pages/work-experience/work-experience.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { LandingPageComponent } from './landing-page.component';
const routes: Routes = [
    {
        path: "",
        component :  LandingPageComponent,
        children: [
            {
                path: RoutingPath.appRouting.components.landing_page.pages.home.path,
                component: HomeComponent,
                data: {
                    breadcrumb: RoutingPath.appRouting.components.landing_page.pages.home.breadcrumb
                }
            },
            {
                path: RoutingPath.appRouting.components.landing_page.pages.skill.path,
                component: SkillComponent,
                data: {
                    breadcrumb: RoutingPath.appRouting.components.landing_page.pages.skill.breadcrumb
                }
            },
            {
                path: RoutingPath.appRouting.components.landing_page.pages.work_experience.path,
                component: WorkExperienceComponent,
                data: {
                    breadcrumb: RoutingPath.appRouting.components.landing_page.pages.work_experience.breadcrumb
                }

            },
            {
                path: RoutingPath.appRouting.components.landing_page.pages.contact.path,
                component: ContactComponent,
                data: {
                    breadcrumb: RoutingPath.appRouting.components.landing_page.pages.contact.breadcrumb
                }
            },
            {
                path: RoutingPath.appRouting.components.landing_page.pages.projects.path,
                loadChildren: () =>
                    import('./pages/projects/projects.module').then((m) => m.ProjectsModule)
            }
        ]
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LandingPageRoutingModule { }