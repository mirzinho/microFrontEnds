import {enableProdMode, VERSION} from '@angular/core';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import {platformBrowser} from "@angular/platform-browser";

if (environment.production) {
  enableProdMode();
}

const ngVersion = VERSION.full;

(window as any).plattform = (window as any).plattform || {};
let platform = (window as any).plattform[ngVersion];
if (!platform) {
  platform = platformBrowser();
  (window as any).plattform[ngVersion] = platform;
}

platform.bootstrapModule(AppModule)
  .catch((err: any) => console.error(err));
