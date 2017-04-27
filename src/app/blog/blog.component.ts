import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MdDialog, MdDialogRef} from '@angular/material';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
 
})
export class BlogComponent implements OnInit {
  selectedOption: string;
  
  test = "test";
  posts = [
    {
      title:"Hiking on Arthur's pass",
      date:"Jan, 12, 2017",
      author:"Nui Rattapon",
      picurl:"../../assets/img/phone.jpg",
      content:"Full-stack web developer work in Agile & Scrum software environment, build emergency contact platform . Main technologies involve : C# Asp.Net MVC, AngularJS",
      social:""
    }
  ];

  constructor(public dialog: MdDialog) { }

  ngOnInit() {}



  
}


