import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideAuth, getAuth } from '@angular/fire/auth';






bootstrapApplication(AppComponent, appConfig,)
  .catch((err) => console.error(err));
