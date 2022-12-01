import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mylib-example-lib',
  template: `
    <h6>
      example-lib works!
    </h6>
  `,
  styles: [
  ]
})
export class ExampleLibComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
