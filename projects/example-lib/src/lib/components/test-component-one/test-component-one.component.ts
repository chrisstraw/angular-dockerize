import { Component, OnInit, Type } from '@angular/core';
import { TemplateDecorator } from '../../decorators';

@TemplateDecorator.register({
  templateName: 'mylib-test-component-one',
  version: 'V1'
})
@Component({
  selector: 'mylib-test-component-one',
  templateUrl: './test-component-one.component.html',
  styleUrls: ['./test-component-one.component.css']
})
export class TestComponentOneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}



// export class TestComponentOneDefinition implements IDefinitionTest {
//   entry: Type<any> = TestComponentOneComponent;
//   // entry: Type<TestComponentOneComponent>
// }


export const TEST_ONE_COMPONENTS = [
  TestComponentOneComponent,
];

// export class TEST_ONE_DEFINITIONS implements IDefinitionTest {
//   items: Type<any>[] = TEST_ONE_COMPONENTS;
// }


