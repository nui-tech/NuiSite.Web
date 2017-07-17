import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

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
    private _postAPIUrl = 'http://localhost:60506/api/';  
            //'http://nuisite.azurewebsites.net/api/';  
            
    //posts: FirebaseListObservable<any[]>;
    posts: Observable<Post[]>;
    postOptions = {};
    constructor(
        public db: AngularFireDatabase,
        private _http: Http
        ) { 
          
        }

    // addPost(post: Post) {
    //     return this.posts.push(post);
    // }

    // getPosts(): FirebaseListObservable<any[]> {
    //     return this.db.list('/blog');
    // }

    getPosts(): Observable<any[]>{   
        let _headers = new Headers({'Accept':'application/json'});
        let options = new RequestOptions({ headers: _headers });    
        return this._http
                .get(this._postAPIUrl+'posts', options)
                .map(this.extractData);
                
    }

    // addPost(newPost: Post): Observable<Post[]>{        
    //     return this._http
    //             .post(this._postAPIUrl, newPost, this.postOptions)
    //             .map((response: Response) => <Post[]>response.json());
                
    // }

    private extractData(res: Response) {
        let body = <Post[]>res.json();
        debugger;
        return body;
    } 




}
