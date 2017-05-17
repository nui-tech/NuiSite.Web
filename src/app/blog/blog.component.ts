import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

//Material
import { MdDialog, MdDialogRef } from '@angular/material';

//Firebase
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

//GSAP
import { TweenLite } from 'gsap';
//skrollr
import * as skrollr from 'skrollr/src/skrollr';

//Service
import { BlogService } from './blog.service';
import { LoginService } from '../login/login.service';

//custom
import { slideInOutAnimation} from '../_animations/route-animation'

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  animations: [slideInOutAnimation],
  host: {'[@slideInOutAnimation]': ''}

})
export class BlogComponent implements OnInit {
  user: Observable<firebase.User>;
  loginForm: FormGroup;
  addPostForm: FormGroup;
  post: FirebaseListObservable<any[]>;


  // dependency inject 
  constructor(
    public afAuth: AngularFireAuth,
    public db: AngularFireDatabase,
    public loginService: LoginService,
    private fb: FormBuilder
  ) {

    this.user = this.afAuth.authState;
    this.post = this.db.list('/blog');

  }



  ngOnInit(): void {
    this.initAnimation();
    this.initFormGroup();
  }

  initAnimation() {
    let
      logo = document.getElementById("logo"),
      logoTxt = document.getElementById("logoTxt"),
      post = document.getElementById("post");

    TweenLite.from(logo, 1, { autoAlpha: 0, delay: 0.3 });
    TweenLite.from(logoTxt, 1, { x: 20 });


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
      createdon: ['', Validators.required],
      content: ['I love dog', [Validators.required, Validators.minLength(3)]],
      picurl: 'https://cdn.pixabay.com/photo/2017/05/06/04/01/dog-2288841__340.jpg',
      tag: ''

    });
  }

  loginByEmail() {
    console.log(this.loginForm);
    this.loginService.loginByEmail(this.loginForm.value.email, this.loginForm.value.password);
  }

  getemail() {
    // this.useremail = this.afAuth.auth.currentUser.email;

  }

  addPost() {

    let mypost = new Post();
    mypost.title = this.addPostForm.value.title;
    mypost.author = this.addPostForm.value.author;
    mypost.createdon = this.addPostForm.value.createdon;
    mypost.content = this.addPostForm.value.content;
    mypost.picurl = this.addPostForm.value.picurl;
    mypost.tag = this.addPostForm.value.tag;
    var jQuery: any;
    this.post.push(mypost)
      .then(_ => {
        console.log('success');
        alert('Post Success!');
        jQuery("#newPostModalLong").modal("hide");
      })
      .catch(err => console.log('You do not have access!', err));
    console.log('newpost fired');
  }



}

class Post {
  author: string = '';
  content: string = '';
  createdon: string = '';
  id: number = 0;
  picurl: string = '';
  social: string = "";
  tag: string = "";
  title: string = '';
}

  //To create ReactiveFrom 
  // 1 import ReactiveFromModule in root module 
  // 2 import FormBuilder to componenet and inject it
  // 3 initialize it in life cycle hook oninit

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


      // {
      //   "author": "Nui Rattapon",
      //   "content": "Mount Hutt rises to the west of the Canterbury Plains in the South Island of New Zealand, above the braided upper reaches of the Rakaia River, and 80 kilometres west of Christchurch. Its summit is 2190 metres above sea level. ",
      //   "createdon": "Jan, 12, 2017",
      //   "id": 3,
      //   "picurl": "http://snow.co.nz/media/cache/60/fe/60fe0a542ea729c536751a237cc27ac1.jpg",
      //   "social": "",
      //   "tag": "",
      //   "title": "Mt.Hutt"
      // }

