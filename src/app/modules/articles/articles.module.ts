import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    ArticleDetailsComponent,
    PostDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ArticleDetailsComponent
  ]
})
export class ArticlesModule { }
