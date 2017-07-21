import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestOptionsArgs } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/toPromise';


//Models class
import { IPost, Post } from './Post';



@Injectable()
export class BlogService {
    //private _postAPIUrl = 'http://w10-2.shared:60506/api/posts/';  
    private _postAPIUrl = 'https://nuisite.azurewebsites.net/api/posts/';
    private _token: any;
    private _posts: IPost[];
    public posts: IPost[];
    public post: IPost;
    public errorMessage: string;

    constructor(
        private _http: Http
    ) {
        this.post = new Post();
        this.posts = new Array<Post>();
    }


    getPosts() {
        let _headers = new Headers({ 'Accept': 'application/json' });
        let options = new RequestOptions({ headers: _headers });
        this._http
            .get(this._postAPIUrl, options)
            .map(this.extractDatas)
            .subscribe(
            res => this.posts = res,
            error => this.errorMessage = error
            );
    }

    getPost(id: number) {
        let _headers = new Headers();
        _headers.append('Accept', 'application/json');
        _headers.append('Content-Type', 'application/json');
        this._http.get(this._postAPIUrl + id, { headers: _headers })
            .map(this.extractData)
            .subscribe(
            res => this.post = res,
            error => this.errorMessage = error);
    }

    deletePost(id: number) {
        let headers = new Headers();
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');
        this._http.delete(this._postAPIUrl + id, { headers: headers })
            .map(this.extractData)
            .subscribe(
            res => this.posts.splice(this.posts.findIndex(obj => obj.id === res.id), 1),
            error => this.errorMessage = error
            );
    }

    addPost(newPost: IPost) {
        let _headers = new Headers();
        _headers.append('Accept', 'application/json');
        _headers.append('Content-Type', 'application/json');
        this._http
            .post(this._postAPIUrl, newPost, { headers: _headers })
            .map(this.extractData)
            .subscribe(
            res => this.posts.unshift(res),
            error => this.errorMessage = error);
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
        return this._http
            .post(this._postAPIUrl, newPost, { headers: _headers })
            .map(this.extractData);

    }

    deleteObsPost(id: number): Observable<IPost> {
        let _headers = new Headers();
        _headers.append('Accept', 'application/json');
        _headers.append('Content-Type', 'application/json');
        return this._http.delete(this._postAPIUrl + id, { headers: _headers })
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




}
