import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

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
  private newPost: IPost;
  editor;
  newPostForm: FormGroup;
  content: any;
  user: firebase.User;
  postTags: any;
  pageIdentifier;
  formHeader: string;

  constructor(
    private _formBuilder: FormBuilder,
    private _acRoute: ActivatedRoute,
    public blogService: BlogService,
    private _router: Router,
    public afAuth: AngularFireAuth,
    public authenService: AuthenService,
    public pageTitle: Title
  ) {

  }

  ngOnInit() {
    this.authenService.user
      .subscribe(
      res => this.user = res,
      error => alert(error)
      );
    this.initFormGroup();
    this.initTinyMCE();
    this.blogService.getTags();
    this.pageIdentifier = this._acRoute.snapshot.params['id'];
    if (this.pageIdentifier == '0') this.initForNewPost();
    else this.initForEdit();
  }

  initForNewPost() {
    this.formHeader = "New post";
    this.pageTitle.setTitle(this.formHeader);
  }

  initForEdit() {
    this.formHeader = "Edit post";
    this.pageTitle.setTitle(this.formHeader);
    if (this.blogService.posts.length != 0) {
      //if there are posts exist, find from local and use it
      this.blogService.post = this.blogService.posts.find(x => x.id == this.pageIdentifier);
      tinymce.activeEditor.setContent(this.blogService.post.content);
      this.setFormValue();
    }
    else {
      //if no posts exist, get one from server
      this.blogService.getObsPostById(this.pageIdentifier)
        .subscribe(
        post => { this.blogService.post = post; },
        error => console.log(error),
        () => {
          tinymce.activeEditor.setContent(this.blogService.post.content);
          this.setFormValue();
        }
        );
    }

  }

  initFormGroup() {
    this.newPostForm = this._formBuilder.group({
      title: [''],
      description: [''],
      content: [this.content, Validators.required]
    });
  }

  postSubmit() {
    this.pageIdentifier == 0 ? this.addNewPost() : this.editPost();
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

  editPost() {
    this.blogService.showLoading = true;
    this.newPost = new Post();
    this.newPost.id = this.pageIdentifier;
    this.newPost.title = this.newPostForm.value.title;
    this.newPost.description = this.newPostForm.value.description;
    this.newPost.content = this.newPostForm.value.content;
    this.newPost.author = this.user.displayName == null ? 'undefined' : this.user.displayName;
    this.newPost.createdOn = this.blogService.post.createdOn;
    this.newPost.updatedOn = Date.now().toString();
    this.blogService.editObsPost(this.newPost)
      .subscribe(
      res => this.blogService.getPosts(),
      error => {
        alert('Edit post failed.');
        this.blogService.onError(error);
      },
      () => {
        this.blogService.onComplete();
        this._router.navigate(['/blog',this.pageIdentifier]);
      }
      );
  }

  setFormValue() {
    this.newPostForm.patchValue({
      title: this.blogService.post.title,
      description: this.blogService.post.description
    });
    // this.newPostForm.patchValue({description:this.blogService.post.description});
    // debugger;
  }

  ngAfterViewInit() { }

  initTinyMCE() {
    tinymce.init({
      selector: '#tinymceEditor',
      plugins: ['advlist', 'link', 'paste', 'table', 'codesample', 'image', 'textcolor', 'colorpicker', 'preview'],

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
