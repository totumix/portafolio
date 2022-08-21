import { Injectable } from '@angular/core';
import { forkJoin, Observable, of, zip } from 'rxjs';
import { map, mergeAll, mergeMap, tap, toArray } from 'rxjs/operators';
import { ArticlesManager } from '../manager/articles.manager';
import { CategoriesManager } from '../manager/categories.manager';
import { PostsManager } from '../manager/posts.manager';
import { article } from '../query-params/article.api';
@Injectable({
    providedIn: 'root',
})
export class ProjectDetailsVm {

    constructor(
        private articlesManager: ArticlesManager,
        private postsManager: PostsManager
    ) {

    }

    getArticle(articlesId) {
        return this.articlesManager.getArticle(articlesId);
    }

    getPostsArticle(articleId) {
        return this.articlesManager.getArticle(articleId).pipe(
            mergeMap(article => this.postsManager.getPostsArticle(article._id).pipe(
                map(posts => {
                    return ({ ...article, posts });
                }),
            ))
        )
    }

}
