import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestOptionsArgs } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/toPromise';

import { AuthenService } from './../authen.service';

//Models class
import { IPost, Post } from './Post';
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from 'firebase/app';



@Injectable()
export class BlogService {
    //private _postAPIUrl = 'http://w10-2.shared:60507/api/posts/';  
    private _postAPIUrl = 'https://nuisite.azurewebsites.net/api/posts/';
    private _tagsAPIUrl = 'https://nuisite.azurewebsites.net/api/tags/';
    private _token: any;
    private _posts: IPost[];
    public posts: IPost[];
    public post: IPost;
    public errorMessage: string;
    public showLoading: boolean = false;
    user: any;
    public tags: any[];

    constructor(
        private _http: Http,
        private _afAuth: AngularFireAuth,
        private _af: AuthenService
    ) {
        this.post = new Post();
        this.posts = new Array<Post>();
        _af.user.subscribe(
            res => { this.user = res; this._token = this.user.Yd; },
            error => this.errorMessage = error
        )
    }


    getPosts() {
        this.showLoading = true;
        let _headers = new Headers({ 'Accept': 'application/json' });
        let options = new RequestOptions({ headers: _headers });
        this._http
            .get(this._postAPIUrl, options)
            .map(this.extractDatas)
            .subscribe(
            res => this.posts = res.reverse(),
            error => this.onError(error),
            () => this.onComplete()
            );
    }

    getPost(id: number) {
        this.showLoading = true;
        let _headers = new Headers();
        _headers.append('Accept', 'application/json');
        _headers.append('Content-Type', 'application/json');
        this._http.get(this._postAPIUrl + id, { headers: _headers })
            .map(this.extractData)
            .subscribe(
            res => this.post = res,
            error => this.onError(error),
            () => this.onComplete()
            );
    }

    deletePost(id: number) {
        this.showLoading = true;
        let headers = new Headers();
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Bearer ' + this._token);
        this._http.delete(this._postAPIUrl + id, { headers: headers })
            .map(this.extractData)
            .subscribe(
            res => this.posts.splice(this.posts.findIndex(obj => obj.id === res.id), 1),
            error => this.onError(error),
            () => this.onComplete()
            );
    }

    addPost(newPost: IPost) {
        this.showLoading = true;
        let _headers = new Headers();
        _headers.append('Accept', 'application/json');
        _headers.append('Content-Type', 'application/json');
        _headers.append('Authorization', 'Bearer ' + this._token);
        this._http
            .post(this._postAPIUrl, newPost, { headers: _headers })
            .map(this.extractData)
            .subscribe(
            res => this.posts.unshift(res),
            error => this.onError(error),
            () => this.onComplete()
            );
    }

    editPost(post: IPost) {
        this.showLoading = true;
        let _headers = new Headers();
        _headers.append('Accept', 'application/json');
        _headers.append('Content-Type', 'application/json');
        _headers.append('Authorization', 'Bearer ' + this._token);
        this._http
            .put(this._postAPIUrl + post.id, post, { headers: _headers })
            .map(this.extractData)
            .subscribe(
            res => this.posts.unshift(res),
            error => this.onError(error),
            () => this.onComplete()
            );
    }





    getObsPosts(): Observable<IPost[]> {
        let _headers = new Headers({ 'Accept': 'application/json' });
        let options = new RequestOptions({ headers: _headers });
        return this._http
            .get(this._postAPIUrl, options)
            .map(this.extractDatas);
    }

    getObsPostById(id: number): Observable<IPost> {
        let _headers = new Headers();
        _headers.append('Accept', 'application/json');
        _headers.append('Content-Type', 'application/json');
        return this._http.get(this._postAPIUrl + id, { headers: _headers })
            .map(this.extractData);
    }

    addObsPost(newPost: IPost): Observable<IPost> {
        let _headers = new Headers();
        _headers.append('Accept', 'application/json');
        _headers.append('Content-Type', 'application/json');
        _headers.append('Authorization', 'Bearer ' + this._token);
        return this._http
            .post(this._postAPIUrl, newPost, { headers: _headers })
            .map(this.extractData);

    }

    deleteObsPost(id: number): Observable<IPost> {
        let _headers = new Headers();
        _headers.append('Accept', 'application/json');
        _headers.append('Content-Type', 'application/json');
        _headers.append('Authorization', 'Bearer ' + this._token);
        return this._http.delete(this._postAPIUrl + id, { headers: _headers })
            .map(this.extractData);

    }

    editObsPost(post: IPost): Observable<IPost> {
        this.showLoading = true;
        let _headers = new Headers();
        _headers.append('Accept', 'application/json');
        _headers.append('Content-Type', 'application/json');
        _headers.append('Authorization', 'Bearer ' + this._token);
        return this._http
            .put(this._postAPIUrl + post.id, post, { headers: _headers })
            .map(this.extractData);
            
    }

    private extractData(res: Response) {
        let body = <IPost>res.json();
        return body;
    }

    private extractDatas(res: Response) {
        let body = <IPost[]>res.json();
        return body;
    }


    getTags() {
        this.showLoading = true;
        let _headers = new Headers({ 'Accept': 'application/json' });
        let options = new RequestOptions({ headers: _headers });
        this._http
            .get(this._tagsAPIUrl, options)
            .map(this.extractDatas)
            .subscribe(
            res => this.tags = res,
            error => this.onError(error),
            () => this.onComplete()
            );
    }

    public onError(error) {
        this.errorMessage = error;
        this.showLoading = false;
    }

    public onComplete() {
        this.showLoading = false;
    }


}
