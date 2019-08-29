import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from '../utility/components/footer/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../home/home.module').then(mod => mod.HomeModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('../dashboard/dashboard.module').then(mod => mod.DashboardModule)
  },

  { path: '404', component: PageNotFoundComponent },
  { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
