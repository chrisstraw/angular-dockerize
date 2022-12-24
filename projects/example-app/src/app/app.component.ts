import { Component, OnInit } from '@angular/core';
import { TemplateService } from 'example-lib';
import { FormTemplateServiceService } from './core/form-template-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'example-app';

  constructor(
    private templateService: FormTemplateServiceService
  ) {
  }

  ngOnInit(): void {
    const result = this.templateService.getComponent();
    console.log('ngOnInit', result);

    //console.log(new MyNonAngularClass().myName);
    //console.log(new MyNonAngularClass2().myName);
  }

}

