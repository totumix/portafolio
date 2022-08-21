import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { PostDetailsComponent } from './post-details/post-details.component';



@NgModule({
  declarations: [
    ArticleDetailsComponent,
    PostDetailsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ArticleDetailsComponent
  ]
})
export class ArticlesModule { }
