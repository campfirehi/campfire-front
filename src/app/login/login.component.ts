import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

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
    private router: Router
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
    this.authService.doRegister(formValue)
      .then(res => {
        console.log(res);
        this.regularLogin(formValue);
      }, err => {
        console.log(err);
        // this.errorMessage = err.message;
        // this.successMessage = "";
      })
  }

  regularLogin(formValue) {
    this.handleLogin(formValue, this.authService.doLogin)
  }

  googleLogin() {
    this.handleLogin(null, this.authService.doGoogleLogin)
  }



  handleLogin(formValue, handler) {
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
    console.log(res)
    this.router.navigate(['/dashboard'])
  }

  errorLogin(err) {
    console.log(err);
    if (err.code === "auth/user-not-found") {
      this.errorMessage = "User not found with the given email and password combination"
    }
    
  }
}

