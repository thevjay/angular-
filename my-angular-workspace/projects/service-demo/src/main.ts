import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { LoginComponent } from './app/login/login.component';
import { ParentComponent } from './app/parent/parent.component';
import { ProductsComponent } from './app/products/products.component';

bootstrapApplication(ProductsComponent, appConfig)
  .catch((err) => console.error(err));
