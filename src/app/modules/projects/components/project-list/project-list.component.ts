import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/configs/backend.service';
import { IPost } from 'src/app/core/models/Post.interface';
@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  public posts : IPost[]
  constructor(
    private _backendService: BackendService
  ) { }

  ngOnInit(): void {
    this._backendService.getAuth('posts/').subscribe(
         res => {
          let { posts } = res;
          this.posts = posts;
         },
         err => {
         }
       )
  }

}
