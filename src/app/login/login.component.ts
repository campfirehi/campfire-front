import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../utility/services/auth/auth.service';
import { Router } from '@angular/router';
import { LoadingConfigService } from '../utility/services/loading/loading-config.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private loadingService: LoadingConfigService
  ) {
    this.createForm();
  }
  ngOnInit() {
  }

  createForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  register(formValue) {
    this.loadingService.setLoading(true)
    this.authService.doRegister(formValue)
      .then(res => {
        console.log(res);
        this.regularLogin(formValue);
      }, err => {
        this.errorLogin(err);
      })
  }

  regularLogin(formValue) {
    this.handleLogin(formValue, this.authService.doLogin)
  }

  googleLogin() {
    this.handleLogin(null, this.authService.doGoogleLogin)
  }

  handleLogin(formValue, handler) {
    this.loadingService.setLoading(true)
    if (formValue != null) {
      
      handler(formValue).then(res => {
        this.successLogin(res);
      }, err => {
        this.errorLogin(err);
      })

    } else {

      handler().then(res => {
        this.successLogin(res);
      }, err => {
        this.errorLogin(err);
      })
    }
  }

  successLogin(res) {
    this.errorMessage = "";
    this.loadingService.setLoading(false)
    this.router.navigate(['/dashboard', 'profile'])
  }

  errorLogin(err) {
    console.log(err);
    if (err.code === "auth/user-not-found") {
      this.errorMessage = "User not found with the given email and password combination"
    } else {
      this.errorMessage = err.message
    }
    this.loadingService.setLoading(false)

  }
}

