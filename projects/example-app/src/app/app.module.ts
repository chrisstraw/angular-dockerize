import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ExampleLibModule } from 'example-lib';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ExampleLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
