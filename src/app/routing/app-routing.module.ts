import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { LandingComponent } from '../landing/landing.component';
import { AboutUsComponent } from '../about-us/about-us.component';
import { DashboardPageComponent } from '../dashboard-page/dashboard-page.component';
import { CanActivateViaAuthGuard } from './auth-guard';
import { environment } from 'src/environments/environment';
import { DummyAuthGuard } from './dummy-auth-guard';
import { DashboardUserComponent } from '../dashboard-user/dashboard-user.component';

const authGuard = environment.production ? CanActivateViaAuthGuard : DummyAuthGuard;

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'dashboard', component: DashboardPageComponent, canActivate: [authGuard],
    children: [
      {path: 'home', component: DashboardUserComponent}
    ]

  },
  { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
