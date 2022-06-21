import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {

  public skills = [];
  public tabSelected = 'technologies'
  public skillsCategories = [
    { value: 'technologies', label: 'Technologies' },
    { value: 'frameworks', label: 'Frameworks' },
    { value: 'tools', label: 'Tools' },
    { value: 'design', label: 'Design' }
  ]
  constructor() { }

  ngOnInit(): void {
    this.clickTab('technologies')
  }

  clickTab(tab) {
    this.tabSelected = tab;
    if (this.tabSelected == 'technologies') {
      this.skills = [
        { label: "HTML", points: [true, true, true, true, true], img: 'assets/img/html.png' },
        { label: "Javascrip", points: [true, true, true, true, false], img: 'assets/img/js.png' },
        { label: "Java", points: [true, true, true, false, false], img: 'assets/img/java.png' },
        { label: "CSS", points: [true, true, true, true, false], img: 'assets/img/css.png' },
        { label: "SQL", points: [true, true, true, false, false], img: 'assets/img/sql.png' },
        { label: "Mongo DB", points: [true, true, true, true, false], img: 'assets/img/mongodb.png' },
      ]
    }
    if (this.tabSelected == 'frameworks') {
      this.skills = [
        { label: "Material Angular", points: [true, true, true, true, true], img: 'assets/img/html.png' },
        { label: "Angular 2+", points: [true, true, true, true, false], img: 'assets/img/angular.png' },
        { label: "Nodejs", points: [true, true, true, true, false], img: 'assets/img/nodejs.png' },
        { label: "Boostrap", points: [true, true, true, true, false], img: 'assets/img/bootstrap.png' },
        { label: "Express", points: [true, true, true, true, false], img: 'assets/img/express.png' },
        { label: "SASS", points: [true, true, true, true, false], img: 'assets/img/sass.png' },
        { label: "Vue", points: [true, true, true, false, false], img: 'assets/img/vue.png' },
        { label: "React", points: [true, true, true, false, false], img: 'assets/img/react.png' },
      ]
    }
    if (this.tabSelected == 'tools') {
      this.skills = [
        { label: "Windows", points: [true, true, true, true, true], img: 'assets/img/windows.png' },
        { label: "Linux", points: [true, true, true, true, true], img: 'assets/img/linux.png' },
        { label: "VS code", points: [true, true, true, true, true], img: 'assets/img/vscode.png' },
        { label: "Postman", points: [true, true, true, true, true], img: 'assets/img/postman.png' },
        { label: "Slack", points: [true, true, true, true, true], img: 'assets/img/slack.png' },
        { label: "Jira", points: [true, true, true, true, true], img: 'assets/img/jira.png' },
        { label: "MySQL Workbench", points: [true, true, true, true, true], img: 'assets/img/workbench.png' },
        { label: "Robo 3t", points: [true, true, true, true, true], img: 'assets/img/robo3t.png' },
        { label: "MongoDB Compass", points: [true, true, true, true, true], img: 'assets/img/compass.png' },
        { label: "Terminal", points: [true, true, true, true, true], img: 'assets/img/terminal.png' },
      ]
    }
    if (this.tabSelected == 'design') {
      this.skills = [
        { label: "Figma", points: [true, true, true, true, false], img: 'assets/img/figma.png' },
        { label: "Adobe XD", points: [true, true, true, true, false], img: 'assets/img/adobexd.png' },
        { label: "Sketch", points: [true, true, true, false, false], img: 'assets/img/sketch.png' },
        { label: "Adobe Illustrator", points: [true, true, true, false, false], img: 'assets/img/adobei.png' },
        { label: "Adobe Photoshop", points: [true, true, true, false, false], img: 'assets/img/photoshop.png' },
      ]
    }

  }

}
