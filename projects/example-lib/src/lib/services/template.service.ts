import { Injectable } from '@angular/core';
import { TEST_ONE_COMPONENTS, TEST_TWO_COMPONENTS } from '../components';
import { TemplateDecorator } from '../decorators';
import { TemplateDefinitionType } from '../models';


export abstract class TemplateService {

  protected definitions = new Array<TemplateDefinitionType>();
  // private static entries: any[] = [];
  // private templateDefinitions = new Array<IDefinitionTest>();

  private templateDefinitions = new Array<any[]>();

  constructor() {
    this.templateDefinitions.push(TEST_ONE_COMPONENTS);
    this.templateDefinitions.push(TEST_TWO_COMPONENTS);
    // DEFINITIONS
    //this.templateDefinitions.push(new TestComponentOneDefinition());
    //this.templateDefinitions.push(new TestComponentTwoDefinition());

    this.loadDefinitions(TemplateDecorator.GetImplementations());
    console.log('TemplateService.definitions', this.definitions);
    console.log('TemplateService.templateDefinitions', this.templateDefinitions);

  }


  private loadDefinitions(values: any[]) {
    for (var x = 0; x < values.length; x++) {
      this.definitions.push(new TemplateDefinitionType(values[x].options, values[x].component.prototype, values[x].component));
    }
  }

  getComponent(): Array<TemplateDefinitionType> {
    return this.definitions;
  }

  abstract get register(): any;

  // static register(target: any, opt: any) {
  //   this.entries.push({ target, opt });
  // }
}



// @Injectable()
// export class DecoratorService {
//   private static service: TemplateService | undefined = undefined;
//   public constructor(service: TemplateService) {
//     DecoratorService.service = service;
//   }
//   public static getService(): TemplateService {
//     if (!DecoratorService.service) {
//       throw new Error('DecoratorService not initialized');
//     }
//     return DecoratorService.service;
//   }
// }