import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

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


  constructor(
    public blogService: BlogService,
    private _pageTitle: Title,
    public afAuth: AngularFireAuth,
    public authenService: AuthenService) { }

  ngOnInit() {
    this._pageTitle.setTitle('Blog - Nui Rattapon');
    this.blogService.getPosts();
    
  }

  deletePost(id:number){
    this.blogService.deletePost(id);
  }


}
