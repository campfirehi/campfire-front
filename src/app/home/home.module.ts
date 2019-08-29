import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './about-us/about-us.component';
import { LoginComponent } from './login/login.component';
import { WordcloudComponent } from './explore/wordcloud/wordcloud.component';
import { JoinTopicComponent } from './explore/join-topic/join-topic.component';
import { HomeRoutingModule } from './routing/home-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LandingComponent } from './landing/landing.component';
import { LogoutComponent } from './logout/logout.component';
import { ExploreComponent } from './explore/explore.component';
import { CreateTopicComponent } from './explore/create-topic/create-topic.component';
import { DiscussionListComponent } from './explore/join-topic/discussion-list/discussion-list.component';


@NgModule({
  declarations: [
    AboutUsComponent,
    AboutUsComponent,
    LoginComponent,
    WordcloudComponent,
    JoinTopicComponent,
    LandingComponent,
    LogoutComponent,
    ExploreComponent,
    CreateTopicComponent,
    DiscussionListComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class HomeModule { }
