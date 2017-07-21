import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AsyncPipe } from '@angular/common';
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
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

//GSAP
import { TweenLite } from 'gsap';
//skrollr
import * as skrollr from 'skrollr/src/skrollr';

//Service
import { BlogService } from './blog.service';
import { AuthenService } from '../authen.service';

//custom
import { slideInOutAnimation } from '../_animations/index'

//interface
import { Post, IPost } from './Post';
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
  postContent: any;
  posts: IPost[];
  errorMessage: string;



  // dependency inject 
  constructor(
    public afAuth: AngularFireAuth,
    public authenService: AuthenService,
    private fb: FormBuilder,
    private _blogService: BlogService,
    private titleService: Title,
  ) {
    this.user = this.afAuth.authState;


  }

  

  ngOnInit(): void {
    this.titleService.setTitle( 'Blog - Nui Rattapon' );
    this.initAnimation();
    this.initFormGroup();
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
      content: [''],
    });
  }

  loginByEmail() {
    console.log(this.loginForm);
    this.authenService.loginByEmail(this.loginForm.value.email, this.loginForm.value.password);
  }

  addPost() {
  
    let mypost = new Post();
    mypost.title = this.addPostForm.value.title;
    mypost.content = this.postContent;
    mypost.author = this.addPostForm.value.author;
    mypost.createdOn, mypost.updatedOn = Date.now().toString();
    
    this._blogService.addPost(mypost)
      .subscribe(
      rPosts => this.posts.unshift(rPosts),
      error => this.errorMessage = error);

  }



  keyupHandlerFunction(event) {
    this.postContent = event;
  }

}
