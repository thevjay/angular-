import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { RxjsComponent } from './app/components/rxjs/rxjs.component';
import { SearchComponent } from './app/components/search/search.component';

bootstrapApplication(SearchComponent, appConfig)
  .catch((err) => console.error(err));
