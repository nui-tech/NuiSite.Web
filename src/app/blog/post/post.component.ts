import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
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
  @Input() postNumberLoad: number;
  user: Observable<firebase.User>;
  posts: FirebaseListObservable<any[]>;
  

  constructor(public afAuth: AngularFireAuth, public db: AngularFireDatabase, public bs:BlogService) {
    this.user = this.afAuth.authState;
  }

  ngOnInit() {
    this.posts = this.bs.getPosts();
  }


}