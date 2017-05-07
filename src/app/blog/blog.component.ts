import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

//Material
import { MdDialog, MdDialogRef } from '@angular/material';

//Firebase
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

//Service
import { BlogService } from './blog.service';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']

})
export class BlogComponent implements OnInit {


  posts: FirebaseListObservable<any[]>;
 

  constructor(public afAuth: AngularFireAuth, public db: AngularFireDatabase, public loginService: LoginService) {
    this.posts = db.list('/blog');
    this.afAuth.authState;
  }



  ngOnInit() {


  }

  addPost() {

    //this.title = this.myx.title;

    //this._blogService.addLocalPost(this.post);
    alert("Post Successful!");
  }


}

// interface IPost {
//   id: number;
//   title: string;
//   createdOn: string;
//   author: string;
//   picurl: string;
//   content: string;
//   social: string;
//   tag: string;
// }




