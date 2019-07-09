import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class DummyAuthGuard implements CanActivate {
    user: firebase.User;

    constructor() {}

    canActivate() {
        console.log("Not logged in, but in test environment I assume that you are.");
        return true;
    }
}