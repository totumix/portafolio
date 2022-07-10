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
  public innerWidth;
  public carouselHeightValue;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.carouselHeight();
  }
  constructor(
    private route: ActivatedRoute,
    private vm: PostsVm
  ) { }

  ngOnInit() {
    this.postId = this.route.snapshot.params.projectId;
    this.getPost(this.postId)
    this.carouselHeight();
  }

  carouselHeight() {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth < 480) {
      this.carouselHeightValue = 200;
    }
    if (this.innerWidth > 480 && this.innerWidth < 767) {
      this.carouselHeightValue = 300;
    }
    if (this.innerWidth > 1200) {
      this.carouselHeightValue = 550;
    }
  }

  getPost(postId) {
    this.vm.getPost(postId).subscribe(res => {
      let { post }  = res;
      this.post = post;
    })
  }

}
