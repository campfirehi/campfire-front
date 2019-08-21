import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './routing/dashboard-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { DummyAuthGuard } from './routing/dummy-auth-guard';
import { CanActivateViaAuthGuard } from './routing/auth-guard';
import { UserSidebarComponent } from './user-sidebar/user-sidebar.component';
import { TopicComponent } from './topic/topic.component';
import { TopicsListComponent } from './topics-list/topics-list.component';
import { DtTrackComponent } from './dt-track/dt-track.component';


@NgModule({
  declarations: [
    LayoutComponent,
    UserSidebarComponent,
    TopicComponent,
    TopicsListComponent,
    DtTrackComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  providers: [DummyAuthGuard, CanActivateViaAuthGuard]
})
export class DashboardModule { }
