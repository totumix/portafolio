import { Component, Input, OnInit } from '@angular/core';
import { IPost } from 'src/app/core/models/Post.interface';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {

  @Input() post: IPost;

  constructor() { }

  ngOnInit(): void {
  }

}
