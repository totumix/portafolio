import { Component, OnInit } from '@angular/core';
import { articles } from 'src/app/core/bd/ativles';
import { IArticle } from 'src/app/core/models/article.interface';
@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  public articles = [];
  constructor(
  ) { }

  ngOnInit(): void {
    this.articles = articles;
    console.log(this.articles)
  }
}
