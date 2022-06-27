import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  public projects = [
    { label: 'Academia de mesero', img: 'assets/img/academia.jpg' },
    { label: 'Colsubsidio', img: 'assets/img/colsubsidio.png' },
    { label: 'Beer academy', img: 'assets/img/beer.PNG' },
    { label: 'RankCV', img: 'assets/img/rankcv.png' },
    { label: 'Puxles', img: 'assets/img/puxles.PNG' },
    { label: 'Farmatodo', img: 'assets/img/puxles.PNG' },
    { label: 'Superlikers', img: 'assets/img/puxles.PNG' },

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
