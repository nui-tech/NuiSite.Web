import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

//Material
import { MdDialog, MdDialogRef } from '@angular/material';

//Firebase
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

//Service
import { BlogService } from './blog.service';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']

})
export class BlogComponent implements OnInit {
   user: Observable<firebase.User>;
  loginForm: FormGroup;


  // dependency inject 
  constructor(
    public afAuth: AngularFireAuth,
    public db: AngularFireDatabase,
    public loginService: LoginService,
    private fb: FormBuilder
  ) {
    
    this.user = this.afAuth.authState;
    
  }



  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  loginByEmail() {
    console.log(this.loginForm);
    this.loginService.loginByEmail(this.loginForm.value.email,this.loginForm.value.password);
  }




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




