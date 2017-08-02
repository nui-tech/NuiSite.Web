import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { BlogService } from './../blog.service';
import { AuthenService } from './../../authen.service';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
//custom
// import { slideInOutAnimation } from '../../_animations/index'

import { IPost, Post } from './../Post';

import 'rxjs/add/operator/map';
declare var tinymce: any;


@Component({
  templateUrl: './newpost.component.html',
  styleUrls: ['./newpost.component.css']

})
export class NewpostComponent implements OnInit, AfterViewInit, OnDestroy {
  editor;
  private newPost: IPost;
  newPostForm: FormGroup;
  content: any;
  user: firebase.User;

  constructor(
    private _formBuilder: FormBuilder,
    private _blogService: BlogService,
    private _router: Router,
    public afAuth: AngularFireAuth,
    public authenService: AuthenService) { 

    }

  ngOnInit() {
    this.authenService.user
      .subscribe(
      res => this.user = res,
      error => alert(error)
      );
    this.initFormGroup();

  }

  initFormGroup() {
    this.newPostForm = this._formBuilder.group({
      title: ['', Validators.required],
      description: [''],
      content: [this.content, Validators.required]
    });
  }

  addNewPost() {
    this._blogService.showLoading = true;
    this.newPost = new Post();
    this.newPost.title = this.newPostForm.value.title;
    this.newPost.description = this.newPostForm.value.description;
    this.newPost.content = this.newPostForm.value.content;
    this.newPost.author = this.user.displayName == null ? 'undefined' : this.user.displayName;
    this.newPost.createdOn, this.newPost.updatedOn = Date.now().toString();
    this._blogService.addObsPost(this.newPost)
      .subscribe(
      res => this._blogService.posts.unshift(res),
      error => {
        alert('Add post failed.');
        this._blogService.onError(error);
      },
      () => {
        this._blogService.onComplete();       
        this._router.navigate(['/blog']);
      }
    );

  }

  ngAfterViewInit() {
    tinymce.init({
      selector: '#tinymceEditor',
      plugins: ['advlist','link', 'paste', 'table', 'codesample', 'image','textcolor','colorpicker','preview'],
      
      toolbar1: 'undo redo | insert | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent',
      toolbar2: 'forecolor backcolor | link image codesample preview',
      skin_url: '../../assets/skins/lightgray',
      height: '250',
      codesample_languages: [
        { text: 'HTML/XML', value: 'markup' },
        { text: 'JavaScript', value: 'javascript' },
        { text: 'CSS', value: 'css' },
        { text: 'Java', value: 'java' },
        { text: 'C#', value: 'csharp' },
        { text: 'Typescript', value: 'typescript' },
        { text: "SQL", value: "sql" },
      ],
      codesample_content_css: '../../../assets/plugins/prism-vs.css',
      codesample_dialog_width: 650,
      setup: editor => {
        this.editor = editor;
        editor.on('keyup', () => {
          this.content = editor.getContent();
          this.newPostForm.patchValue({ content: editor.getContent() });
        });
      },
    });
  }

  ngOnDestroy() {
    tinymce.remove(this.editor);
  }

}
