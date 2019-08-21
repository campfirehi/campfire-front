import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { environment } from '../../../environments/environment';
import { CanActivateViaAuthGuard } from './auth-guard';
import { DummyAuthGuard } from './dummy-auth-guard';
import { TopicsListComponent } from '../topics-list/topics-list.component';
import { DtTrackComponent } from '../dt-track/dt-track.component';


const authGuard = environment.production ? CanActivateViaAuthGuard : DummyAuthGuard;


const routes: Routes = [
  {
    path: '', component: LayoutComponent, canActivate: [authGuard],
    children: [
      { path: '', component: TopicsListComponent },
      { path: 'topic/:id', component: DtTrackComponent }
    ]

  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
