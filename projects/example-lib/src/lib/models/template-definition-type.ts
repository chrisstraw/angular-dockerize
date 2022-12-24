import { Type } from "@angular/core";

export class TemplateDefinitionType {

  constructor(
    public option: any,
    public prototype: any,
    public componentType: Type<any>,
  ) { }
}
