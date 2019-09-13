import { Component, OnInit } from '@angular/core';

let componentName ="HellowComponent";
let heading ="Introduction to angular";
let headingExtension ="Introduction to angular";
let description =`
<p> mplement a super-simple  custom element using an Angular and TypeScript.
  mplement a super-simple  custom element using an Angular and TypeScript.
  mplement a super-simple  custom element using an Angular and TypeScript.
  </p>

`;

let desc = `
  <header class="page-header">
  <h6> ${componentName} </h6>
  <h1 class ="heading-main"> ${heading}<small>:  ${headingExtension}</small></h1>
  <div class="page-desc">${description}</div>
  </header>
`;

@Component({
  selector: 'app-hellow',
    host: { 'class' : 'pinkbox component'},
    template:desc+`
          <h1>Hello {{name}}!</h1>
          <h1>{{message}} {{name}}!</h1>
          `,
    styles: [``]
})


export class HellowComponent implements OnInit {

  name = 'World';
  message = 'Hellow'
  constructor() { }

  ngOnInit() {
  }

}