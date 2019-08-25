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



@NgModule({
  declarations: [
    LoadingComponent,
    FillPipe
  ],
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule.enablePersistence()
  ],
  exports: [
    LoadingComponent,
    FillPipe
  ]
})
export class UtilityModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: UtilityModule,
      providers: [ScriptLoadingService, CanActivateViaAuthGuard, DummyAuthGuard, AuthService, TopicService, LoadingConfigService]
    };
  }
}
