import { Component, OnInit } from '@angular/core';
import { AuthGuardService } from '../../services/auth/auth-guard';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    private authGuard: AuthGuardService
  ) { }

  ngOnInit() { }

}
// [hidden]="!(loadingService.isLoading | async)"