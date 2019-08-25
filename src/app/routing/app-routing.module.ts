import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { LandingComponent } from '../landing/landing.component';
import { AboutUsComponent } from '../about-us/about-us.component';
import { WordcloudComponent } from '../wordcloud/wordcloud.component';
import { LoginComponent } from '../login/login.component';
import { JoinTopicComponent } from '../wordcloud/join-topic/join-topic.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'explore', component: WordcloudComponent },
  { path: 'explore/:topic', component: JoinTopicComponent},
  {
    path: 'dashboard',
    loadChildren: () => import('../dashboard/dashboard.module').then(mod => mod.DashboardModule)
  },

  { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
