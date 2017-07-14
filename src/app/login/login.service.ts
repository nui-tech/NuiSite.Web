import { Injectable } from '@angular/core';
import { Router } from "@angular/router";

import { AngularFireAuth } from 'angularfire2/auth';

import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';


@Injectable()
export class LoginService {

    //Observable monitor your application's authentication State.
    user: Observable<firebase.User>;


    constructor(public afAuth: AngularFireAuth) {
        this.user = this.afAuth.authState;
        //console.log(this.user);
    }


    loginByGoogle() {
        this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
            .then((success) => {
                console.log(success);
                alert("Welcome " + this.afAuth.auth.currentUser.displayName);
            })
            .catch((err) => {
                alert("Loing failed due to " + err.message);
            });

    }

    loginByFb() {
        this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
            .then((success) => {
                console.log(success);
                alert("Welcome " + this.afAuth.auth.currentUser.displayName);
                
            })
            .catch((err) => {
                alert("Loing failed due to " + err.message);
            });
    }

    loginByEmail(_email: string, _pass: string) {
        this.afAuth.auth.signInWithEmailAndPassword(_email, _pass)
            .then((success) => {
                console.log(success);
                this.user = this.afAuth.authState;
                console.log(this.user);
                alert("Welcome " + this.afAuth.auth.currentUser.email);
            })
            .catch((err) => {
                alert("Loing failed due to " + err.message);
            });
            
            
            
    }

    logout() {
        this.afAuth.auth.signOut()
            .then((mes) => {
                alert("You are loged out! See you next time.")
            });
    }

}
