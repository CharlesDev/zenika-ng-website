import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule),
    provideHttpClient(),
    {
      provide: 'WELCOME_MSG',
      useValue: 'Bienvenue sur Zenika Ecommerce',
    },
    provideRouter(routes),
  ],
}).catch((err) => console.error(err));
