import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsVm } from 'src/app/configs/vm/posts.vm';
import SwiperCore, { SwiperOptions, EffectCoverflow, Autoplay, Pagination } from 'swiper';

SwiperCore.use([EffectCoverflow, Autoplay, Pagination]);
@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {

  public postId: string;
  public post;
  public innerWidth;
 
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

  config: SwiperOptions = {
    pagination: { clickable: true },
    scrollbar: { draggable: true },
    autoplay: {
      delay: 3000
    },
    loop: true,
    effect: 'coverflow'
  };

}
