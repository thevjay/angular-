import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { FlipkartIndexComponent } from './app/components/flipkart-index/flipkart-index.component';

bootstrapApplication(FlipkartIndexComponent, appConfig)
  .catch((err) => console.error(err));
