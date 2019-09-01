import { Component, OnInit } from '@angular/core';
import { UserProfileService } from '../../utility/services/user-profile/user-profile.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoadingStateService } from '../../utility/services/loading/loading-state.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profileForm: FormGroup;
  userProfile

  constructor(
    private userProfileService : UserProfileService,
    private loadingService: LoadingStateService,
    private fb: FormBuilder
  ){}

  ngOnInit() {
    this.userProfileService.getUserProfile().subscribe(a => {
      this.userProfile = a
      this.createForm();
    });
  }
  
  createForm() {
    this.profileForm = this.fb.group({
      firstName: [this.userProfile.firstName, Validators.required],
      lastName: [this.userProfile.lastName, Validators.required],
      email: [this.userProfile.email, Validators.required],
      userName: [this.userProfile.userName, Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    })
  }

  updateProfile(formValue) {
    this.loadingService.setLoading(true)
    this.userProfileService.updateProfile(formValue)
    .then(() => {
      this.loadingService.setLoading(false)
    }, err => {
      console.log(err);
    })
  }
}
