import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './routing/dashboard-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { DummyAuthGuard } from './routing/dummy-auth-guard';
import { CanActivateViaAuthGuard } from './routing/auth-guard';
import { UserSidebarComponent } from './user-sidebar/user-sidebar.component';
import { TopicComponent } from './topics-list/topic/topic.component';
import { TopicsListComponent } from './topics-list/topics-list.component';
import { DtTrackComponent } from './dt-track/dt-track.component';
import { WhiteboardComponent } from './dt-track/whiteboard/whiteboard.component';
import { DtStepsComponent } from './dt-track/dt-steps/dt-steps.component';
import { FillPipe } from './fill.pipe';
import { StepComponent } from './dt-track/dt-steps/step/step.component';
import { ProfileComponent } from './profile/profile.component';
import { UtilityModule } from '../utility/utility.module';


@NgModule({
  declarations: [
    LayoutComponent,
    UserSidebarComponent,
    TopicComponent,
    TopicsListComponent,
    DtTrackComponent,
    WhiteboardComponent,
    DtStepsComponent,
    FillPipe,
    StepComponent,
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    UtilityModule
  ],
  providers: [DummyAuthGuard, CanActivateViaAuthGuard]
})
export class DashboardModule { }
