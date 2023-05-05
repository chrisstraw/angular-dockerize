import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExampleLibModule } from 'example-lib';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApplicationErrorComponent } from './core/views/application-error/application-error.component';

@NgModule({
  declarations: [
    AppComponent,
    ApplicationErrorComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    ExampleLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
