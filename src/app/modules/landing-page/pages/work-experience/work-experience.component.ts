import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent implements OnInit {

  public works = [];

  constructor() {
    this.works = [{
      company_position: "Voluntario",
      enterprise: "Pschool Foundation",
      date: "Febrero 2017 - Actualidad",
      city: "Turbaco-Bolivar-Colombia",
      background: "Hago parte de la fundación Pschool, me estoy formando como Scrum master para brindar apoyo a diferentes estudiantes del país por mediode semilleros de desarrollo de software (Java EE, Angular 2+ y Android).",
    },
    {
      company_position: "Voluntario",
      enterprise: "Pschool Foundation",
      date: "Febrero 2017 - Actualidad",
      city: "Turbaco-Bolivar-Colombia",
      background: "Hago parte de la fundación Pschool, me estoy formando como Scrum master para brindar apoyo a diferentes estudiantes del país por mediode semilleros de desarrollo de software (Java EE, Angular 2+ y Android).",
    },
    {
      company_position: "Voluntario",
      enterprise: "Pschool Foundation",
      date: "Febrero 2017 - Actualidad",
      city: "Turbaco-Bolivar-Colombia",
      background: "Hago parte de la fundación Pschool, me estoy formando como Scrum master para brindar apoyo a diferentes estudiantes del país por mediode semilleros de desarrollo de software (Java EE, Angular 2+ y Android).",
    },
    ]
  }

  ngOnInit(): void {
  }

}
