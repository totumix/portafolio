import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsVm } from 'src/app/configs/vm/posts.vm';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {

  public postId: string;
  public post;

  constructor(
    private route: ActivatedRoute,
    private vm: PostsVm
  ) { }

  ngOnInit() {
    this.postId = this.route.snapshot.params.projectId;
    this.getPost(this.postId)
  }

  getPost(postId) {
    this.vm.getPost(postId).subscribe(res => {
      let { post } = res;
      this.post = post;
      console.log(this.post)
    })
  }

 


}
