import { ViewportScroller } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  skills = [];
  pageYoffset = 0;
  public articles = [];
  @HostListener('window:scroll', ['$event']) onScroll(event) {
    this.pageYoffset = window.pageYOffset;
  }
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.skills = [
      { label: "Angular 2+", points: [true, true, true, true, false], img: 'assets/img/angular.png' },
      { label: "Nodejs", points: [true, true, true, true, false], img: 'assets/img/nodejs.png' },
      { label: "Express", points: [true, true, true, true, false], img: 'assets/img/express.png' },
      { label: "Mongo DB", points: [true, true, true, true, false], img: 'assets/img/mongodb.png' },
    ]
    this.getArticles();
  }

  getArticles() {
    const url = 'http://localhost:3800/api/articles';
    this.http.get<any>(url).subscribe(res => {
      let { articles } = res;
      this.articles = articles;
      console.log(this.articles)
    });
  }


}
