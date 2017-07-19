import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestOptionsArgs } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/toPromise';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';

//Models class
import { Post } from './post';


@Injectable()
export class BlogService {
    //private _postAPIUrl = 'http://w10-2.shared:60506/api/posts';  
    private _postAPIUrl = 'https://nuisite.azurewebsites.net/api/posts';  
            
    //posts: FirebaseListObservable<any[]>;
    posts: Observable<Post[]>;

    constructor(
        public db: AngularFireDatabase,
        private _http: Http
        ) {          
        }

    getPosts(): Observable<Post[]>{   
        let _headers = new Headers({'Accept':'application/json'});
        let options = new RequestOptions({ headers: _headers });    
        return this._http
                .get(this._postAPIUrl, options)
                .map(this.extractDatas);
                
    }

    addPost(newPost: Post): Observable<Post> {
        let _headers = new Headers();
        _headers.append('Accept','application/json');
        _headers.append('Content-Type', 'application/json');       
        return this._http
            .post(this._postAPIUrl, newPost, {headers: _headers})
            .map(this.extractData);

    }

    private extractData(res: Response) {
        let body = <Post>res.json();
        return body;
    } 

     private extractDatas(res: Response) {
        let body = <Post[]>res.json();
        return body;
    } 




}
