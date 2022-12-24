import { TemplateService } from "../services/template.service";

export namespace TemplateDecorator {
  const entries: any[] = [];
  export function GetImplementations(): any[] {
    return entries;
  }
  export function register(opts: any) {
    return function (target: any) {
      console.log('TemplateDecorator', '->', opts);
      const val: any = {
        options: opts,
        component: target
      };
      entries.push(val);
      return target;
    }
  }
}


// const entriesFooBar: any[] = [];
// export function foobar(opts: any) {
//   return function (target: any) {
//     console.log('foobar', '->', opts);
//     const val: any = {
//       options: opts,
//       component: target
//     };
//     entriesFooBar.push(val);
//     return target;
//   }
// }