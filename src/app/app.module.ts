import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from './app.component';
import { MainLayoutModule } from './layouts/main-layout/main-layout.module';
import { ProjectLayoutModule } from './layouts/project-layout/project-layout.module';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { ProjectLayoutComponent } from './layouts/project-layout/project-layout.component';
import { LandingPageModule } from './modules/landing-page/landing-page.module';
import { HeaderComponent } from './layouts/components/header/header.component';
import { FooterComponent } from './layouts/components/footer/footer.component';
import { PostsService } from './configs/posts.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    ProjectLayoutComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MainLayoutModule,
    LandingPageModule,
    ProjectLayoutModule
  ],
  providers: [
    PostsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
