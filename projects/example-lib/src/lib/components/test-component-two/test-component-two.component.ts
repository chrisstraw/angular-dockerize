import { Component, OnInit, Type } from '@angular/core';
import { TemplateDecorator } from '../../decorators';


@TemplateDecorator.register({
  templateName: 'mylib-test-component-two',
  version: 'V1'
})
@Component({
  selector: 'mylib-test-component-two',
  templateUrl: './test-component-two.component.html',
  styleUrls: ['./test-component-two.component.css']
})
export class TestComponentTwoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}


// @foobar({
//   templateName: 'mylib-test-component-two',
//   version: 'V1'
// })
@TemplateDecorator.register({
  templateName: 'mylib-test-component-three',
  version: 'V1'
})
@Component({
  selector: 'mylib-test-component-three',
  templateUrl: './test-component-two.component.html',
  styleUrls: ['./test-component-two.component.css']
})
export class TestComponentThreeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}


export const TEST_TWO_COMPONENTS = [
  TestComponentTwoComponent,
  TestComponentThreeComponent,
];

// export class TEST_TWO_DEFINITIONS implements IDefinitionTest {
//   items: Type<any>[] = TEST_TWO_COMPONENTS;
// }

