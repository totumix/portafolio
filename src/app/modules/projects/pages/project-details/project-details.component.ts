import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {



  public postId: string;
  public post;
  public innerWidth;
  public carouselHeightValue;
  public projects = [
    {
      title: 'Colsubsidio',
      img: 'assets/img/colsubsidio.svg',
      images: ['assets/img/colsubsidio1.png', 'assets/img/colsubsidio2.PNG', 'assets/img/colsubsidio3.PNG', 'assets/img/colsubsidio4.PNG'],
      brief: 'Corporación de derecho privado sin ánimo de lucro, que pertenece al Sistema del Subsidio Familiar y al Sistema de Protección y Seguridad Social colombiano.',
      description: 'Participé como desarrollador frontend. Era el encargado de la migración de plataforma de javascript a angular y de mejorar e implementar nuevas funcionalidades y módulos.',
      projectId: 1,
      tags: ['Angular', 'Javascript', 'Css 3', 'Sass']
    },
    {
      title: 'Superlikers',
      img: 'assets/img/superlikers.svg',
      images: ['assets/img/sl1.PNG', 'assets/img/sl2.PNG', 'assets/img/sl3.PNG'],
      brief: 'Superlikers es una plataforma online para configurar y administrar Programas de Fidelización 360°.',
      description: 'Participé como desarrollador frontend. Era el encargado de mejorar el implementar nuevas funcionalidades y módulos, además de ayudar en la maquetación de micrositios.',
      projectId: 2,
      tags: ['Angular', 'Javascript', 'Css 3', 'Sass']
    },
    {
      title: 'Modelo para ganar',
      img: 'assets/img/modelo-para-ganar.png',
      video: 'assets/videos/modelo-para-ganar.mp4',
      brief: 'Plataforma y herramienta digital, creada para los más de 10000 modeloramas de grupo modelo en México, que busca facilitar el relacionamiento con los empresarios, potenciando su alcance y metas comerciales. ',
      description: 'Participe como desarrollador frontend. Era el encargado de la mejora e implementación de nuevos templates.',
      tags: ['Html 5', 'Javascript', 'Css 3', 'Bootstrap', 'Jquery'],
      projectId: 3,
    },
    {
      title: 'Beer academy',
      img: 'assets/img/beer.PNG',
      brief: 'Plataforma y herramienta digital, creada para enseñar de la cerveza',
      video: 'assets/videos/beer-academy.mp4',
      description: 'Participe como desarrollador frontend. Era el encargado de la mejora e implementación de nuevos templates.',
      projectId: 4,
      tags: ['Jquery', 'Javascript', 'Css 3', 'Bootstrap']
    },
    {
      title: 'RankCV',
      img: 'assets/img/rankcv.svg',
      images: ['assets/img/rankcv1.PNG', 'assets/img/rankcv2.PNG', 'assets/img/rankcv3.PNG', 'assets/img/rankcv4.PNG'],
      brief: 'Conecta profesionales de las Tecnologías de la Información con las empresas que buscan transformar sus modelos de negocio para integrar la tecnología digital en sus operaciones.',
      description: 'Participé como líder de desarrollo frontend. Era el encargado de gestionar el desarrollo de esta landing page , asignación de tareas, revisión de código e implementación de componentes.',
      projectId: 5,
      tags: ['Angular', 'Css 3', 'Sass']
    },
    {
      title: 'Action Tracker',
      img: 'assets/img/actiontracker.svg',
      images: ['assets/img/action-tracker1.png', 'assets/img/action-tracker2.PNG'],
      brief: 'Action Tracker Solutions proporciona ciber-cerebros que pueden procesar diferentes tipos de información, provenientes de personas, vehículos, maquinaria industrial y otros para tomar decisiones más elaboradas en términos de seguridad, protección y rentabilidad para las empresas.',
      description: 'Participé como líder de desarrollo frontend. Era el encargado de gestionar el desarrollo de esta aplicación web , asignación de tareas, revisión de código e implementación de nuevos módulos.',
      projectId: 6,
      tags: ['Angular', 'Css 3', 'Sass', 'Leaflet']
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

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.carouselHeight();
  }
  constructor(
    public route: ActivatedRoute
  ) {
    this.postId = this.route.snapshot.params.projectId;
    this.post = this.projects.filter(post => post.projectId == parseInt(this.postId))[0];
  }

  ngOnInit() {
    this.carouselHeight();
  }

  carouselHeight() {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth < 480) {
      this.carouselHeightValue = 200;
    }
    if (this.innerWidth > 480 && this.innerWidth < 767) {
      this.carouselHeightValue = 300;
    }
    if (this.innerWidth > 1200) {
      this.carouselHeightValue = 550;
    }
  }

}
