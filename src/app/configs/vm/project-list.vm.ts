import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { ArticlesManager } from '../manager/articles.manager';
import { CategoriesManager } from '../manager/categories.manager';
import { PostsManager } from '../manager/posts.manager';
@Injectable({
  providedIn: 'root',
})
export class ProjectListVm {


  constructor(
    private articlesManager: ArticlesManager,
    private categoriesManager: CategoriesManager
  ) {

  }

  getArticles() {
    return this.articlesManager.getArticles();
  }

  getArticle(articlesId) {
    return this.articlesManager.getArticle(articlesId);
  }

  getArticlesCategory(categoryId) {
    return this.articlesManager.getArticle(categoryId);
  }

  getArticlesWithCategory(categoryName) {
    return this.categoriesManager.getCategoryWithName(categoryName).pipe(
      map(categories => {
        const category = categories[0];
        return category;
      }),
      mergeMap(category => this.articlesManager.getArticlesCategory(category._id))
    )
  }
}
