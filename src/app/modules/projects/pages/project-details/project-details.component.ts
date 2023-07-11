import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IArticle } from 'src/app/core/models/article.interface';
// import { PostsVm } from 'src/app/configs/vm/project-list.vm';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {

  public articleId: string;
  public article: IArticle;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.articleId = this.route.snapshot.params.projectId;
  }




}
