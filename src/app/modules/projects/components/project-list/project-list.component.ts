import { Component, OnInit } from '@angular/core';
import { ProjectListVm } from 'src/app/configs/vm/project-list.vm';
import { IArticle } from 'src/app/core/models/article.interface';
@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  public articles: IArticle[]
  constructor(
    private vm: ProjectListVm
  ) { }

  ngOnInit(): void {
    this.vm.getArticlesWithCategory('Portafolio').subscribe(res => {
      let { total, articles } = res;
      this.articles = articles;
    })
  }
}
