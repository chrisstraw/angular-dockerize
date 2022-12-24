import { Component, OnInit } from '@angular/core';
import { TemplateDecorator } from 'example-lib';


@TemplateDecorator.register({
  templateName: 'app-local-template',
  version: 'V1'
})
@Component({
  selector: 'app-local-template',
  templateUrl: './local-template.component.html',
  styleUrls: ['./local-template.component.scss']
})
export class LocalTemplateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
