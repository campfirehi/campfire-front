import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
// import { AuthGuardService } from '../utility/services/auth/auth-guard';
import * as firebase from 'firebase';
import { from } from 'rxjs';
import { AuthGuardService } from '../auth/auth-guard';
import { Query } from '@firebase/firestore-types'

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  constructor(
    private afs: AngularFirestore,
    private authGuard: AuthGuardService
    //private authGuard: AuthGuardService
  ) { }
  
updateProfile(value) {
  this.afs.collection('users').doc(this.authGuard.getUserUID()).set({
    firstName: value.firstName,
    lastName: value.lastName,
    userName: value.userName,
    email: value.email,
  });
  // const query = this.afs.collection('users', ref => ref.where('uid','==', this.authGuard.getUserUID()))
  // query.snapshotChanges.
  // return new Promise<any>((resolve, reject) => {
    //this.afs.collection('users', ref => ref.where('uid','==', this.authGuard.getUserUID())
      // });

}
}
