import { Injectable } from '@angular/core';
import { PostsManager } from '../manager/posts.manager';
@Injectable({
  providedIn: 'root',
})
export class PostsVm {
  

  constructor(
   private postsManager : PostsManager
  ) {

  }

  getPosts(){
   return this.postsManager.getPosts();
  }
}
