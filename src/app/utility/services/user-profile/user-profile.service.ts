import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthGuardService } from '../auth/auth-guard';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  constructor(
    private afs: AngularFirestore,
    private authGuard: AuthGuardService,
    //private authGuard: AuthGuardService
  ) { }

  updateProfile(value): Promise<void> {
    return this.afs.collection('users').doc(this.authGuard.getUserUID()).set({
      firstName: value.firstName,
      lastName: value.lastName,
      userName: value.userName,
      email: value.email,
    })
  }

  getUserProfile() {
    console.log('called');
    return this.afs.collection('users').doc(this.authGuard.getUserUID()).get().pipe(map(snapshot => {
      if (snapshot.exists) {
        return snapshot.data() 
      } else {
        return null
      }
    }))
  }
}
