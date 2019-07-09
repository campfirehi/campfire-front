import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable()
export class CanActivateViaAuthGuard implements CanActivate {
    user: firebase.User;

    constructor(private afAuth: AngularFireAuth, private router: Router) {
        this.afAuth.user.subscribe(
            user => { 
                console.log(this.user);
                this.user = user;
            },
            err => console.log
        );
    }

    canActivate() {
        if (this.user) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    }
}