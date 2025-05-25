import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { IfDemoComponent } from './app/if-demo/if-demo.component';
import { IfelseComponent } from './app/ifelse/ifelse.component';
import { SwitchDirectiveBasicComponent } from './app/switch-directive-basic/switch-directive-basic.component';
import { SwitchProductsComponent } from './app/switch-products/switch-products.component';
import { SimpleForExComponent } from './app/simple-for-ex/simple-for-ex.component';
import { NasaDataComponent } from './app/nasa-data/nasa-data.component';
import { ForPropertiesComponent } from './app/for-properties/for-properties.component';
import { ForTrackComponent } from './app/for-track/for-track.component';
import { ClassDemoComponent } from './app/class-demo/class-demo.component';
import { StyleDemoComponent } from './app/style-demo/style-demo.component';
import { CustomDirComponent } from './app/custom-dir/custom-dir.component';

bootstrapApplication(CustomDirComponent, appConfig)
  .catch((err) => console.error(err));
