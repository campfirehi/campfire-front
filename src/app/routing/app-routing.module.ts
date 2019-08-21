import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { LandingComponent } from '../landing/landing.component';
import { AboutUsComponent } from '../about-us/about-us.component';
import { WordcloudComponent } from '../wordcloud/wordcloud.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'wordcloud', component: WordcloudComponent },
  // {
  //   path: 'dashboard', component: DashboardPageComponent, canActivate: [authGuard],
  //   children: [
  //     { path: 'home', component: DashboardUserComponent },
  //     { path: 'topic/:id', component: DashboardPlanningComponent }
  //   ]

  // },
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
