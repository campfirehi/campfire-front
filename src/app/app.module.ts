import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './routing/app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
import { CanActivateViaAuthGuard } from './routing/auth-guard';
import { DummyAuthGuard } from './routing/dummy-auth-guard';
import { UserSidebarComponent } from './user-sidebar/user-sidebar.component';
import { DashboardMainComponent } from './dashboard-main/dashboard-main.component';
import { DashboardUserComponent } from './dashboard-user/dashboard-user.component';
import { DashboardTopicComponent } from './dashboard-topic/dashboard-topic.component';
import { CanvasWhiteboardModule } from 'ng2-canvas-whiteboard';
import { DashboardCanvasComponent } from './dashboard-canvas/dashboard-canvas.component';
import { WordcloudComponent } from './wordcloud/wordcloud.component';
import { DashboardPlanningComponent } from './dashboard-planning/dashboard-planning.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    FooterComponent,
    NavbarComponent,
    PageNotFoundComponent,
    AboutUsComponent,
    DashboardPageComponent,
    UserSidebarComponent,
    DashboardMainComponent,
    DashboardUserComponent,
    DashboardTopicComponent,
    DashboardCanvasComponent,
    WordcloudComponent,
    DashboardPlanningComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'campfire'),
    // AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    // AngularFireStorageModule // imports firebase/storage only needed for storage features
    CanvasWhiteboardModule
  ],
  providers: [CanActivateViaAuthGuard, DummyAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
