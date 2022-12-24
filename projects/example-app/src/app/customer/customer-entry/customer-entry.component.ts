import { Component, OnInit } from '@angular/core';
import { TemplateDecorator } from 'example-lib';

@TemplateDecorator.register({
  templateName: 'app-customer-entry',
  version: 'V1'
})
@Component({
  selector: 'app-customer-entry',
  templateUrl: './customer-entry.component.html',
  styleUrls: ['./customer-entry.component.scss']
})
export class CustomerEntryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
