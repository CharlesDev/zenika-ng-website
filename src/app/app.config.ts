import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    {
      provide: 'WELCOME_MSG',
      useValue: 'Bienvenue sur Zenika Ecommerce',
    },
    provideRouter(routes),
  ],
};
