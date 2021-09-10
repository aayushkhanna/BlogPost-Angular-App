/**
 * @Aayush Khanna
 * Trainee Technology
 *
 * This file is used for the production of app and to handle console errors.
 */

//Imports
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

//Console error
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
