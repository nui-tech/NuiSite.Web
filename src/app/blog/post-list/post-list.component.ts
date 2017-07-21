import { Component, OnInit } from '@angular/core';

//Firebase
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { BlogService } from '../blog.service';
import { AuthenService } from '../../authen.service';
import { Post, IPost } from '../Post';

@Component({
  templateUrl: './post-list.component.html',
  styleUrls: ['../blog.component.css']
})
export class PostListComponent implements OnInit {
  private posts: Post[];
  errorMessage: string;

  constructor(
    private _blogService: BlogService,
    public afAuth: AngularFireAuth,
    public authenService: AuthenService) { }

  ngOnInit() {
    this._blogService.getPosts()
      .subscribe(rPosts => this.posts = rPosts,
      error => this.errorMessage = error
      );
  }

    deletePost(id: number) {
    this._blogService.deletePost(id)
      .subscribe(rPosts => this.posts.splice(this.posts.findIndex(obj => obj.id === rPosts.id),1),
      error => this.errorMessage = error
      );
  }

}
