import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {

  public skills = [];

  constructor() { }

  ngOnInit(): void {
    this.skills = [
      // { label: "Material Angular", points: [true, true, true, true, true] },
      // { label: "HTML", points: [true, true, true, true, true] },
      // { label: "Javascrip", points: [true, true, true, true, false] },
      // { label: "CSS", points: [true, true, true, true, false] },
      { label: "Angular 2+", points: [true, true, true, true, false], img :'assets/img/angular.png' },
      { label: "Nodejs", points: [true, true, true, true, false], img :'assets/img/nodejs.png' },
      // { label: "Boostrap", points: [true, true, true, true, false] },
      // { label: "Figma", points: [true, true, true, true, false] },
      // { label: "Adobe XD", points: [true, true, true, true, false] },
      { label: "Express", points: [true, true, true, true, false], img :'assets/img/express.png' },
      // { label: "Layout grid", points: [true, true, true, true, false] },
      // { label: "SASS", points: [true, true, true, true, false] },
      // { label: "Vue", points: [true, true, true, false, false] },
      // { label: "React", points: [true, true, true, false, false] },
      { label: "Mongo DB", points: [true, true, true, true, false], img :'assets/img/mongodb.png' },
      // { label: "My SQL", points: [true, true, true, false, false] },
      // { label: "Postgress", points: [true, true, true, false, false] },
      // { label: "LESS", points: [true, true, true, false, false] },

    ]
  }

}
