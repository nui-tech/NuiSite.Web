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
import { Post } from './post';


@Injectable()
export class BlogService {
    private _postUrl = 'http://nuisite.azurewebsites.net/api/';
    
    posts: FirebaseListObservable<any[]>;

    constructor(
        public db: AngularFireDatabase,
        private _http: Http
        ) { 
          
        }

    addPost(post: Post) {
        return this.posts.push(post);
    }

    getPosts(): FirebaseListObservable<any[]> {
        return this.db.list('/blog');
    }

    getTest(): Observable<any[]>{   
        let _headers = new Headers({'Accept':'application/json'});
        let options = new RequestOptions({ headers: _headers });    
        return this._http
                .get(this._postUrl+'posts', options)
                .map((response: Response) => <any[]>response.json());
            
    }






}
