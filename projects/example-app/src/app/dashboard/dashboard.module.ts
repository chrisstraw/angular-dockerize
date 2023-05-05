import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './views';
import { ExampleLibModule } from 'example-lib';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ExampleLibModule
  ]
})
export class DashboardModule { }
