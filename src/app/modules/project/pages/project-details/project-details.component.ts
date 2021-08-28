import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CAROUSEL_DATA_ITEMS } from 'src/app/configs/carousel.const';
import { ICarouselItem } from 'src/app/configs/Icarousel-item.metadata';
import { PostsService } from 'src/app/configs/posts.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {

  public postId: string;
  public post;
  public carouselData: ICarouselItem[] = CAROUSEL_DATA_ITEMS;

  constructor(
    private _postService: PostsService,
    public route: ActivatedRoute
  ) {
    this.postId = this.route.snapshot.params.projectId;
    this._postService.getPost(this.postId).subscribe(res => {
      let { post } = res;
      this.post = post;
      console.log(this.post)
    });
  }

  ngOnInit(): void {

  }

}
