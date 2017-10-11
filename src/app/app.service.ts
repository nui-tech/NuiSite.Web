import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class AppService {

    visitors: FirebaseListObservable<any[]> = null;
    visitor: FirebaseObjectObservable<any> = null;
    ipDetails: any;
    errorMessage: any;
    visits: any;

    private basePath: string = '/visits';


    constructor(
        private http: Http,
        private db: AngularFireDatabase
    ) {
        this.visitors = this.getItemsList();
        this.ipDetails = this.getIP();
    }

    public getIP() {
        this.http.get('https://ipapi.co/json/') // ...using post request
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')) //...errors if any
            .subscribe(
            res => { this.ipDetails = res; console.log(res); },
            error => this.errorMessage = <any>error
            );
    }

    public getIPObs(): Observable<any[]> {
        return this.http.get('https://ipapi.co/json/') // ...using post request
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    }


    getItemsList(query = {}): FirebaseListObservable<any[]> {
        this.visitors = this.db.list(this.basePath, {
            query: query
        });
        return this.visitors;
    }

    getItem(key: string): FirebaseObjectObservable<any> {
        const itemPath = `${this.basePath}/${key}`;
        this.visitor = this.db.object(itemPath)
        return this.visitor;
    }
}