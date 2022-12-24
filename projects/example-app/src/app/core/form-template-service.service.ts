import { Injectable } from '@angular/core';
import { CustomerEntryComponent } from '@app/customer/customer-entry/customer-entry.component';
import { TemplateService } from 'example-lib';
import { LocalTemplateComponent } from './local-template/local-template.component';

@Injectable({
  providedIn: 'root'
})
export class FormTemplateServiceService extends TemplateService {

  constructor() { super(); }


  get register(): any {
    return [
      LocalTemplateComponent,
      CustomerEntryComponent
    ]
  }



}
