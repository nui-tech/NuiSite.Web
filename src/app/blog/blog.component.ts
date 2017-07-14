import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

//Material
import { MdDialog, MdDialogRef } from '@angular/material';

//Firebase
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

//GSAP
import { TweenLite } from 'gsap';
//skrollr
import * as skrollr from 'skrollr/src/skrollr';

//Service
import { BlogService } from './blog.service';
import { LoginService } from '../login/login.service';

//custom
import { slideInOutAnimation } from '../_animations/index'

//interface
import { Post } from './post';
declare var jquery:any;
declare var $ :any;
declare var tinymce: any;

@Component({
  moduleId: module.id,
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']

})
export class BlogComponent implements OnInit {
  user: Observable<firebase.User>;
  loginForm: FormGroup;
  addPostForm: FormGroup;
  post: FirebaseListObservable<any[]>;
  postContent: any;
  postLoad: number = 10;
  posts: any[];
  errorMessage: string;




  // dependency inject 
  constructor(
    public afAuth: AngularFireAuth,
    public db: AngularFireDatabase,
    public loginService: LoginService,
    private fb: FormBuilder,
    private _blogService: BlogService,
    private titleService: Title,
  ) {
    this.titleService.setTitle( 'Blog - Nui Rattapon' );
    this.user = this.afAuth.authState;
    this.post = this.db.list('/blog');
    // this.post = this.db.object('/blog');
  }

  

  ngOnInit(): void {
    this.initAnimation();
    this.initFormGroup();
    this._blogService.getTest()
          .subscribe(
            rPosts => this.posts = rPosts,
            error => this.errorMessage = error
          );

  }



















  initAnimation() {
    let
      logo = document.getElementById("logo"),
      logoTxt = document.getElementById("logoTxt"),
      post = document.getElementById("post");

    TweenLite.from(logo, 1, { autoAlpha: 0, delay: 0.7 });
    TweenLite.from(logoTxt, 1, { autoAlpha: 0, x: 20, delay: 1 });


    // let linkBlog = document.getElementById("link-blog");
    // linkBlog.className += " active";

  }

  initFormGroup() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

    this.addPostForm = this.fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      // createdon: ['', Validators.required],
      content: ['I love dog', [Validators.required, Validators.minLength(3)]],
      picurl: 'https://cdn.pixabay.com/photo/2017/05/06/04/01/dog-2288841__340.jpg',
      tag: ''

    });
  }

  loginByEmail() {
    console.log(this.loginForm);
    this.loginService.loginByEmail(this.loginForm.value.email, this.loginForm.value.password);
  }

  addPost() {

    let mypost = new Post();
    mypost.title = this.addPostForm.value.title;
    mypost.author = this.addPostForm.value.author;
    mypost.createdon = Date.now().toString();
    mypost.content = this.postContent;
    mypost.picurl = this.addPostForm.value.picurl;
    mypost.tag = this.addPostForm.value.tag;
    this.post.push(mypost)
      .then(_ => {
        alert('Post Success!');
        $('#newPostModalLong').modal('hide');
      })
      .catch(err => console.log('You do not have access!', err));
    console.log('newpost fired');
  }

  keyupHandlerFunction(event) {
    this.postContent = event;
  }


}
