import { Injectable } from '@angular/core';
// import { Http, Response } from '@angular/http';

// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/do';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/observable/throw';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { Post } from './post';


@Injectable()
export class BlogService {
    private _blogPostUrl = 'api/posts/posts.json';

    posts: FirebaseListObservable<any[]>;

    constructor(public db: AngularFireDatabase) { }

    addPost(post: Post) {
        return this.posts.push(post);
    }

    getPosts(): FirebaseListObservable<any[]> {
        return this.db.list('/blog');
    }

    deletePost(item: string) {
        alert('Delete Post'); debugger;
        this.posts.remove(item);
    }

    // getPosts(): Observable<any[]> {
    //     return this._http.get(this._blogPostUrl)
    //         .map((response: Response) => <any[]> response.json())
    //         .do(data => console.log('All: ' +  JSON.stringify(data)))
    //         .catch(this.handleError);
    // }

    // getPost(id: number): FirebaseListObservable<any> {
    //     return this.getPosts().
    //         //.map((posts: any[]) => posts.find(b => b.postId === id));
    // }

    // private handleError(error: Response) {
    //     // in a real world app, we may send the server to some remote logging infrastructure
    //     // instead of just logging it to the console
    //     console.error(error);
    //     return Observable.throw(error.json().error || 'Server error');
    // }

}
