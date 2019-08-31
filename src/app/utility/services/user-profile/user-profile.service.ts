import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthGuardService } from '../auth/auth-guard';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  constructor(
    private afs: AngularFirestore,
    private authGuard: AuthGuardService,
    //private authGuard: AuthGuardService
  ) { }
  
updateProfile(value) : Promise<void> {
    return this.afs.collection('users').doc(this.authGuard.getUserUID()).set({
      firstName: value.firstName,
      lastName: value.lastName,
      userName: value.userName,
      email: value.email,
    })
}
}
