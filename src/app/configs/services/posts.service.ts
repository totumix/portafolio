import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BackendService } from '../backend.service';
import { post } from '../query-params/post.api';
@Injectable()
export class PostsService {

  constructor(
    private _backendService: BackendService
  ) { }

  getPosts(): Observable<any> {
    return this._backendService.getAuth(`${post.posts}`)
  }

  getPost(postId): Observable<any> {
    return this._backendService.get(`${post.post}${postId}`)
  }

  getPostsArticle(articleId): Observable<any> {
    return this._backendService.get(`${post.postsArticle}${articleId}`)
  }

}
