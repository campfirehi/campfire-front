import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './components/loading/loading.component';
import { ScriptLoadingService } from './services/scripts-loader/script-loading.service';
import { FillPipe } from './pipes/fill.pipe';
import { CanActivateViaAuthGuard } from './services/auth/auth-guard';
import { DummyAuthGuard } from './services/auth/dummy-auth-guard';
import { AuthService } from './services/auth/auth.service';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { TopicService } from './services/topics/topic.service';
import { LoadingConfigService } from './services/loading/loading-config.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { PageNotFoundComponent } from './components/footer/page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    LoadingComponent,
    PageNotFoundComponent,
    FillPipe,
    MainLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([]),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule.enablePersistence()
  ],
  exports: [
    LoadingComponent,
    FillPipe,
    NavbarComponent,
    FooterComponent,
    PageNotFoundComponent,
    MainLayoutComponent
  ]
})
export class UtilityModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: UtilityModule
    };
  }
}
