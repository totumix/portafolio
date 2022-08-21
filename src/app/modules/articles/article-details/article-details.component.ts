import { Component, Input, OnInit } from '@angular/core';
import { IArticle } from 'src/app/core/models/article.interface';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.scss']
})
export class ArticleDetailsComponent implements OnInit {

  @Input() article: IArticle;
  constructor() { }

  ngOnInit(): void {
  }

}
