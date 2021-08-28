import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/configs/posts.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  public post = [];
  constructor(
    private _postService: PostsService
  ) { }

  ngOnInit(): void {
    this._postService.getPosts().subscribe(res => {
      let { post } = res;
      this.post = post;
    });
  }

}
