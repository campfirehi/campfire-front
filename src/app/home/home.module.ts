import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './about-us/about-us.component';
import { LoginComponent } from './login/login.component';
import { WordcloudComponent } from './wordcloud/wordcloud.component';
import { JoinTopicComponent } from './wordcloud/join-topic/join-topic.component';
import { HomeRoutingModule } from './routing/home-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LandingComponent } from './landing/landing.component';



@NgModule({
  declarations: [
    AboutUsComponent,
    AboutUsComponent,
    LoginComponent,
    WordcloudComponent,
    JoinTopicComponent,
    LandingComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
