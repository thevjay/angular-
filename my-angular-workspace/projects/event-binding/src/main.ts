import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { MouseEventComponent } from './app/mouse-event/mouse-event.component';
import { KeyEventsComponent } from './app/key-events/key-events.component';

bootstrapApplication(KeyEventsComponent, appConfig)
  .catch((err) => console.error(err));
