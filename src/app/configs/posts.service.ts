import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { contentHeaders } from './headers';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class PostsService {
  private url: string;
  private options;

  // constructor(
  //   private _http: HttpClient
  // ) {
  //   this.url = `${environment.serverUrl}`;
  //   this.options = { headers: contentHeaders }
  // }

  // getPosts(): Observable<any> {
  //   return this._http.get(this.url + 'posts', this.options)
  // }

  // getPost(postId): Observable<any> {
  //   return this._http.get(this.url + 'post/' + postId, this.options)
  // }

}
