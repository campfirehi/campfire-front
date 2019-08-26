import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from '../landing/landing.component';
import { AboutUsComponent } from '../about-us/about-us.component';
import { LoginComponent } from '../login/login.component';
import { WordcloudComponent } from '../wordcloud/wordcloud.component';
import { JoinTopicComponent } from '../wordcloud/join-topic/join-topic.component';
import { LogoutComponent } from '../logout/logout.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'explore', component: WordcloudComponent },
  { path: 'explore/:topic', component: JoinTopicComponent},


]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
