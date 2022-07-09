import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/configs/backend.service';
import { PostsService } from 'src/app/configs/services/posts.service';
import { IPost } from 'src/app/core/models/Post.interface';
@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  public posts: IPost[]
  constructor(
    private vm: PostsService
  ) { }

  ngOnInit(): void {
    this.vm.getPosts().subscribe(res => {
      let {posts} = res;
      this.posts = posts;
    })
  }
}
