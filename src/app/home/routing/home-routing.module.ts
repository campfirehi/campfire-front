import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from '../landing/landing.component';
import { AboutUsComponent } from '../about-us/about-us.component';
import { LoginComponent } from '../login/login.component';
import { JoinTopicComponent } from '../explore/join-topic/join-topic.component';
import { LogoutComponent } from '../logout/logout.component';
import { ExploreComponent } from '../explore/explore.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'explore', component: ExploreComponent },
  { path: 'explore/:topic', component: JoinTopicComponent},


]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
