import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'blog-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  posts = [
    {
      id: 1,
      title: "Hiking on Arthur's pass",
      createddate: "Jan, 12, 2017",
      author: "Nui Rattapon",
      picurl: "../../assets/img/phone.jpg",
      content: "Full-stack web developer work in Agile & Scrum software environment, build emergency contact platform . Main technologies involve : C# Asp.Net MVC, AngularJS",
      social: "",
      tag: ""
    },
    {
      id: 2,
      title: "Hiking on Arthur's pass",
      createddate: "Jan, 12, 2017",
      author: "Nui Rattapon",
      picurl: "../../assets/img/phone.jpg",
      content: "Full-stack web developer work in Agile & Scrum software environment, build emergency contact platform . Main technologies involve : C# Asp.Net MVC, AngularJS",
      social: "",
      tag: ""
    },
    {
      id: 3,
      title: "Hiking on Arthur's pass",
      createddate: "Jan, 12, 2017",
      author: "Nui Rattapon",
      picurl: "../../assets/img/phone.jpg",
      content: "Full-stack web developer work in Agile & Scrum software environment, build emergency contact platform . Main technologies involve : C# Asp.Net MVC, AngularJS",
      social: "",
      tag: ""
    }
  ];

}
