import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

import * as firebase from 'firebase/app';

import { BlogService } from '../blog.service';
import { AuthenService } from '../../authen.service';
//import { IPost } from '../IPost';
import { Post, IPost } from '../Post';




@Component({
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})





export class PostComponent implements OnInit {
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
    this.blogService.getObsPostById(id)
      .subscribe(
      post => this.post = post,
      error => this.errorMessage = error,
      () => this._pageTitle.setTitle(this.post.title + ' - ' + this.post.author)
      );
  }

  deletePost(id: number) {
    this.blogService.deleteObsPost(id)
      .subscribe(rPosts => alert('Delete success'),
      error => this.errorMessage = error,
      () => this._router.navigate(['/blog'])
      );
  }



}