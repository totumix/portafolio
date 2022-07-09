import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { contentHeaders } from '../headers';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BackendService } from '../backend.service';
import { post } from '../query-params/post.api';
@Injectable()
export class PostsService {

  constructor(
    private _backendService: BackendService
  ) {}

  getPosts(): Observable<any> {
    return this._backendService.getAuth(`${post.posts}`)
  }

  getPost(postId): Observable<any> {
    return this._backendService.getAuth('posts/')
  }

}
