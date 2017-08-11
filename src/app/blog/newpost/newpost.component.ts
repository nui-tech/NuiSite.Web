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
  postTags: any;

    items = ['Javascript', 'Typescript'];

    inputText = 'text';

    itemsAsObjects = [{id: 0, name: 'Angular', readonly: true}, {id: 1, name: 'React'}];

    autocompleteItems = ['Item1', 'item2', 'item3'];

    autocompleteItemsAsObjects = [
        {value: 'Item1', id: 0, extra: 0},
        {value: 'item2', id: 1, extra: 1},
        'item3'
    ];


  constructor(
    private _formBuilder: FormBuilder,
    public blogService: BlogService,
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
    this.blogService.getTags();
  }

  initFormGroup() {
    this.newPostForm = this._formBuilder.group({
      title: ['', Validators.required, Validators.maxLength(150)],
      description: ['', Validators.maxLength(400)],
      content: [this.content, Validators.required]
    });
  }

  addNewPost() {
    this.blogService.showLoading = true;
    this.newPost = new Post();
    this.newPost.title = this.newPostForm.value.title;
    this.newPost.description = this.newPostForm.value.description;
    this.newPost.content = this.newPostForm.value.content;
    this.newPost.author = this.user.displayName == null ? 'undefined' : this.user.displayName;
    this.newPost.createdOn, this.newPost.updatedOn = Date.now().toString();
    this.blogService.addObsPost(this.newPost)
      .subscribe(
      res => this.blogService.posts.unshift(res),
      error => {
        alert('Add post failed.');
        this.blogService.onError(error);
      },
      () => {
        this.blogService.onComplete();       
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
