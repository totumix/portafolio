import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  public projects = [
    {
      title: 'Colsubsidio',
      img: 'assets/img/colsubsidio.svg',
      images: ['assets/img/colsubsidio1.png', 'assets/img/colsubsidio2.PNG', 'assets/img/colsubsidio3.PNG', 'assets/img/colsubsidio4.PNG'],
      brief: 'Corporación de derecho privado sin ánimo de lucro, que pertenece al Sistema del Subsidio Familiar y al Sistema de Protección y Seguridad Social colombiano.',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      projectId: 1,
      tags: ['Angular', 'Javascript', 'Css 3', 'Sass']
    },
    {
      title: 'Superlikers',
      img: 'assets/img/superlikers.svg',
      brief: 'Superlikers es una plataforma online para configurar y administrar Programas de Fidelización 360°.',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      projectId: 2,
      tags: ['Angular', 'Javascript', 'Css 3', 'Sass']
    },
    {
      title: 'Modelo para ganar',
      img: 'assets/img/modelo-para-ganar.png',
      video: 'assets/videos/modelo-para-ganar.mp4',
      brief: 'Plataforma y herramienta digital, creada para los más de 10000 modelo ramas de grupo modelo en México, que busca facilitar el relacionamiento con los empresarios, potenciando su alcance y metas comerciales. ',
      description: 'Participe como desarrollador frontend. Era el encargado de la mejora e implementación de nuevos templates.',
      tags: ['Html 5', 'Javascript', 'Css 3', 'Bootstrap', 'Jquery'],
      projectId: 3,
    },
    {
      title: 'Beer academy',
      img: 'assets/img/beer.PNG',
      brief: 'Lorem Ipsum is simply dummy text of the printing and typesettin',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      projectId: 4,
      tags: ['Jquery', 'Javascript', 'Css 3', 'Bootstrap']
    },
    {
      title: 'RankCV',
      img: 'assets/img/rankcv.svg',
      images: ['assets/img/rankcv1.PNG', 'assets/img/rankcv2.PNG', 'assets/img/rankcv3.PNG', 'assets/img/rankcv4.PNG'],
      brief: 'Conecta profesionales de las Tecnologías de la Información con las empresas que buscan transformar sus modelos de negocio para integrar la tecnología digital en sus operaciones.',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      projectId: 5,
      tags: ['Angular', 'Javascript', 'Css 3', 'Sass']
    },
    {
      title: 'Action Tracker',
      img: 'assets/img/actiontracker.svg',
      brief: 'Superlikers es una plataforma online para configurar y administrar Programas de Fidelización 360°.',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      projectId: 6,
      tags: ['Angular', 'Javascript', 'Css 3', 'Sass']
    },
    {
      title: 'Farmatodo',
      img: 'assets/img/farmatodo.svg',
      images: ['assets/img/farmatodo1.PNG', 'assets/img/farmatodo2.PNG', 'assets/img/farmatodo3.PNG', 'assets/img/farmatodo4.PNG'],
      brief: 'Farmatodo, cadena de droguerías de autoservicio especializada en productos para la salud, belleza, cuidado personal y cuidado del bebé.',
      description: 'En este proyecto participo como desarrollador  frontend . Soy el encargado de la mejora e implementación de nuevas funcionalidades y módulos.',
      projectId: 7,
      tags: ['Angular', 'Ngrx', 'Css 3', 'Sass', 'Rxjs']
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
