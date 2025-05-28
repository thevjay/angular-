import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { TemplateFormComponent } from './app/template-form/template-form.component';
import { TemplateFormValidationComponent } from './app/template-form-validation/template-form-validation.component';
import { ReactiveFormComponent } from './app/reactive-form/reactive-form.component';
import { ReactiveNestedFormComponent } from './app/reactive-nested-form/reactive-nested-form.component';

bootstrapApplication(ReactiveNestedFormComponent, appConfig)
  .catch((err) => console.error(err));
