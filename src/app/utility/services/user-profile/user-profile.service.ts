import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
// import { AuthGuardService } from '../utility/services/auth/auth-guard';
import * as firebase from 'firebase';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  constructor(
    private afs: AngularFirestore,
    //private authGuard: AuthGuardService
  ) { }
  
updateProfile(value) {
  console.log(value);
  // return from(this.afs.collection('users').doc(userId).update({
  //   displayName: displayName
  // }))
}
}
