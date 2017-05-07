import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

//import { IProduct } from './product';

@Injectable()
export class BlogService {
    private _blogPostUrl = 'api/posts/posts.json';

    constructor(private _http: Http) { }

    getPosts(): Observable<any[]> {
        return this._http.get(this._blogPostUrl)
            .map((response: Response) => <any[]> response.json())
            .do(data => console.log('All: ' +  JSON.stringify(data)))
            .catch(this.handleError);
    }

    getPost(id: number): Observable<any> {
        return this.getPosts()
            .map((posts: any[]) => posts.find(b => b.postId === id));
    }

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

    getLocalPosts(){
        return this.posts;
    }

    addLocalPost(post){
        this.posts.push(post);
    }

      posts = [
    {
      id: 1,
      title: "Hiking on Arthur's pass",
      createddate: "Jan, 12, 2017",
      author: "Nui Rattapon",
      picurl: "../../assets/img/phone.jpg",
      content: "Full-stack web developer work in Agile & Scrum software environment, build emergency contact platform . Main technologies involve : C# Asp.Net MVC, AngularJS",
      social: "",
      tag: ""
    }
  ];
}
