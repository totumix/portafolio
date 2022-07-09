import { Injectable } from '@angular/core';
import { PostsService } from '../services/posts.service';

@Injectable({
    providedIn: 'root',
})
export class PostsManager {
    constructor(
        private postsService: PostsService
    ) { }

    getPosts(){
        return this.postsService.getPosts();
    }

    getPost(postId){
        return this.postsService.getPost(postId);
    }
}
