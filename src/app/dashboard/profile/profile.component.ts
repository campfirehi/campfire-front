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

  constructor(
    private userProfileService : UserProfileService,
    private loadingService: LoadingStateService,
    private fb: FormBuilder
  ) {
    this.createForm();
   }

  ngOnInit() {
  }
  
  createForm() {
    this.profileForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      userName: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    })
  }

  updateProfile(formValue) {
    console.log(formValue);
    //this.loadingService.setLoading(true)
    //this.userProfileService.updateProfile(formValue)
  }
}
