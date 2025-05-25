import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { PipesDemoComponent } from './app/pipes-demo/pipes-demo.component';
import { CustomPipeComponent } from './app/custom-pipe/custom-pipe.component';

bootstrapApplication(CustomPipeComponent, appConfig)
  .catch((err) => console.error(err));
