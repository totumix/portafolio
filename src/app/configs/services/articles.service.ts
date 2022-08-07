import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BackendService } from '../backend.service';
import { article } from '../query-params/article.api';
@Injectable()
export class ArticlesService {

    constructor(
        private _backendService: BackendService
    ) { }

    getArticlesCategory(categoryId): Observable<any> {
        return this._backendService.getAuth(`${article.articles}${categoryId}`)
    }

    getArticles(): Observable<any> {
        return this._backendService.getAuth(`${article.articles}`)
    }

    getArticle(postId): Observable<any> {
        return this._backendService.get(`${article.article}${postId}`)
    }

}
