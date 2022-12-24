import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ExampleLibModule, TemplateService } from 'example-lib';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormTemplateServiceService } from './core/form-template-service.service';
import { LocalTemplateComponent } from './core/local-template/local-template.component';
import { CustomerModule } from './customer/customer.module';

@NgModule({
  declarations: [
    AppComponent,
    LocalTemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ExampleLibModule,
    CustomerModule
  ],
  providers: [
    {
      provide: TemplateService,
      useClass: FormTemplateServiceService
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
