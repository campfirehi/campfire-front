import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AuthGuardService {
    private user: firebase.User;
    private logIn = new BehaviorSubject({
        isLoggedIn: false
    });

    constructor(private afAuth: AngularFireAuth) {
        this.afAuth.user.subscribe(
            user => {
                this.user = user;
                if (this.user) {
                    this.logIn.next({ isLoggedIn: true });
                } else {
                    this.logIn.next({ isLoggedIn: false });
                }
            },
            err => console.log
        );
    }

    isLoggedIn() {
        return this.user != null
    }

    getUserUID() {
        if (this.isLoggedIn()) {
            return this.user.uid
        } else {
            console.error('user not logged in')
            return null
        }
    }

    subscribeToLoginStatus() {
        return this.logIn.pipe(map(c => c.isLoggedIn))
    }
}