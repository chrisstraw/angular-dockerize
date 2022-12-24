import { NgModule } from '@angular/core';
import { ExampleLibComponent } from './example-lib.component';
import { TEST_ONE_COMPONENTS } from './components/test-component-one/test-component-one.component';
import { TEST_TWO_COMPONENTS } from './components/test-component-two/test-component-two.component';



@NgModule({
  declarations: [
    ExampleLibComponent,
    TEST_ONE_COMPONENTS,
    TEST_TWO_COMPONENTS
  ],
  imports: [
  ],
  exports: [
    ExampleLibComponent,
    TEST_ONE_COMPONENTS,
    TEST_TWO_COMPONENTS,
  ]
})
export class ExampleLibModule { }
