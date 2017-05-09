import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppModule } from './app/app.module';

import './main.css';

if (process.env.ENV === 'production') {
  enableProdMode();
}

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);