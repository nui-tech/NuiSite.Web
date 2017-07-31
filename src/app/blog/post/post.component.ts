import { Component, OnInit, EventEmitter, Output, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

import * as firebase from 'firebase/app';

import { BlogService } from '../blog.service';
import { AuthenService } from '../../authen.service';

import { Post, IPost } from '../Post';

import 'prismjs';
declare var Prism: any;

@Component({
  templateUrl: './post.component.html',
  styleUrls: [ './post.component.css', './prism-vs.css']
})





export class PostComponent implements OnInit, OnDestroy {
  post: IPost;
  errorMessage: string;


  constructor(
    private _acRoute: ActivatedRoute,
    public afAuth: AngularFireAuth,
    public authenService: AuthenService,
    public blogService: BlogService,
    private _router: Router,
    private _pageTitle: Title) {

  }

  ngOnInit() {
    this.post = new Post();
    let id = +this._acRoute.snapshot.params['id'];
    this.getPost(id);
  }

  getPost(id: number) {
    this.blogService.showLoading = true;
    this.blogService.getObsPostById(id)
      .subscribe(
      post => {this.post = post; console.log(post)},
      error => this.errorMessage = error,
      () => {this._pageTitle.setTitle(this.post.title + ' - ' + this.post.author);
             this.blogService.showLoading = false;}
      );
  }

  deletePost(id: number) {
    this.blogService.showLoading = true;
    this.blogService.deleteObsPost(id)
      .subscribe(rPosts => alert('Delete success'),
      error => this.errorMessage = error,
      () => {this.blogService.showLoading = false;
             this._router.navigate(['/blog']);}
      );
  }


  ngOnDestroy(){
    this.blogService.showLoading = false;
  }



}