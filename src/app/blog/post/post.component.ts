import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

import * as firebase from 'firebase/app';

import { BlogService } from '../blog.service';

@Component({
  selector: 'blog-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  user: Observable<firebase.User>;
  posts: FirebaseListObservable<any[]>;

  constructor(public afAuth: AngularFireAuth, public db: AngularFireDatabase) {

    this.posts = db.list('/blog');
    this.user = this.afAuth.authState;

  }



  ngOnInit() {
    //this.posts = this._blogService.getLocalPosts();
  }

  // posts = [
  //   {
  //     id: 1,
  //     title: "Hiking on Arthur's pass",
  //     createddate: "Jan, 12, 2017",
  //     author: "Nui Rattapon",
  //     picurl: "../../assets/img/phone.jpg",
  //     content: "Full-stack web developer work in Agile & Scrum software environment, build emergency contact platform . Main technologies involve : C# Asp.Net MVC, AngularJS",
  //     social: "",
  //     tag: ""
  //   },
  //   {
  //     id: 2,
  //     title: "Hiking on Arthur's pass",
  //     createddate: "Jan, 12, 2017",
  //     author: "Nui Rattapon",
  //     picurl: "../../assets/img/phone.jpg",
  //     content: "Full-stack web developer work in Agile & Scrum software environment, build emergency contact platform . Main technologies involve : C# Asp.Net MVC, AngularJS",
  //     social: "",
  //     tag: ""
  //   },
  //   {
  //     id: 3,
  //     title: "Hiking on Arthur's pass",
  //     createddate: "Jan, 12, 2017",
  //     author: "Nui Rattapon",
  //     picurl: "../../assets/img/phone.jpg",
  //     content: "Full-stack web developer work in Agile & Scrum software environment, build emergency contact platform . Main technologies involve : C# Asp.Net MVC, AngularJS",
  //     social: "",
  //     tag: ""
  //   }
  // ];

}
