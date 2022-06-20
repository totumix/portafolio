import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/configs/posts.service';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent implements OnInit {

  public posts = [];
  constructor(
    private _postService: PostsService
  ) { }

  ngOnInit(): void {
    console.log("entra")
    this._postService.getPosts().subscribe(res => {
      let { posts } = res;
      this.posts = posts;
    });
  }

}
