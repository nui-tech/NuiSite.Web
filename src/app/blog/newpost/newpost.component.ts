import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { BlogService } from './../blog.service';
import { AuthenService } from './../../authen.service';

//custom
// import { slideInOutAnimation } from '../../_animations/index'

import { IPost, Post } from './../Post';
import * as firebase from 'firebase/app';

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
    private _authenService: AuthenService) { }

  ngOnInit() {
    this._authenService.user
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
    
    this.newPost = new Post();
    this.newPost.title = this.newPostForm.value.title;
    this.newPost.description = this.newPostForm.value.description;
    this.newPost.content = this.newPostForm.value.content;
    this.newPost.createdOn, this.newPost.updatedOn = Date.now().toString();
    this._blogService.addObsPost(this.newPost)
      .subscribe(
      res => {alert('New post added.'); this._router.navigate(['/blog'])},
      error => alert('Add post failed.'));
      
  }

  ngAfterViewInit() {
    tinymce.init({
      selector: '#tinymceEditor',
      plugins: ['link', 'paste', 'table'],
      skin_url: '../../assets/skins/lightgray',
      height: '400',
      setup: editor => {
        this.editor = editor;
        editor.on('keyup', () => {
          this.content = editor.getContent();
          this.newPostForm.patchValue({ content: editor.getContent() });
          this.user.displayName;
          debugger;

        });
      },
    });
  }

  ngOnDestroy() {
    tinymce.remove(this.editor);
  }

}
