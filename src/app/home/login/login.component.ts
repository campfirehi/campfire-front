import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../utility/services/auth/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { LoadingStateService } from '../../utility/services/loading/loading-state.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  loginForm: FormGroup;
  errorMessage: string = '';

  private returnRoute$;
  private nextPage;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private loadingService: LoadingStateService
  ) {
    this.createForm();
  }
  ngOnInit() {
    this.returnRoute$ = this.getNextPage().subscribe(dest => this.nextPage = dest)
  }

  ngOnDestroy() {
    this.returnRoute$.unsubscribe();
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
        this.regularLogin(formValue);
      }, err => {
        this.errorLogin(err);
      })
  }

  regularLogin(formValue) {
    this.loadingService.setLoading(true)
    this.authService.doLogin(formValue).then(res => {
      this.successLogin(res);
    }, err => {
      this.errorLogin(err);
    })
  }

  googleLogin() {
    this.loadingService.setLoading(true)
    this.authService.doGoogleLogin().then(res => {
      this.successLogin(res);
    }, err => {
      this.errorLogin(err);
    })
  }


  successLogin(res) {
    this.errorMessage = "";
    this.loadingService.setLoading(false)
    console.log("succes login, going to " + this.nextPage)
    this.router.navigate(this.nextPage)
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

  getNextPage() {
    return this.route.paramMap
      .pipe(map(() => {
        const returnRoute = window.history.state
        if (Object.keys(returnRoute).length == 1) {
          return ['dashboard', 'profile']
        } else {
          return returnRoute['return']
        }
      }))
  }

}

