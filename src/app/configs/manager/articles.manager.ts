import { Injectable } from '@angular/core';
import { ArticlesService } from '../services/articles.service';
import { PostsService } from '../services/posts.service';

@Injectable({
    providedIn: 'root',
})
export class ArticlesManager {
    constructor(
        private articlesService: ArticlesService
    ) { }

    getArticles() {
        return this.articlesService.getArticles();
    }

    getArticle(articleId) {
        return this.articlesService.getArticle(articleId);
    }

    getArticlesCategory(categoryId) {
        return this.articlesService.getArticlesCategory(categoryId)
    }
}
