import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';

import { routes } from './app.routes';

const firebaseConfig = {
  apiKey: "AIzaSyCwWDG1cU4cQb61olWScGill6G6z9wtJL0",
  authDomain: "sala-juegos-f7ba1.firebaseapp.com",
  projectId: "sala-juegos-f7ba1",
  storageBucket: "sala-juegos-f7ba1.appspot.com",
  messagingSenderId: "791990352942",
  appId: "1:791990352942:web:139b9d34b45f98c12033bf"
};

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth())]
};
