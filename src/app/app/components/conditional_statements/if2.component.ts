import { Component, OnInit } from '@angular/core';

let desc = `
<h6> IfComponent </h6>
<h1 class ="heading-main"> NgIf vs hidden <small> hellow </small></h1>
`;

@Component({
  selector: 'app-if2',
    host: { 'class' : 'pinkbox component'},
    template:desc+`
          <div class="component greenbox">
            <!--  //1) on html elements -->
            <p [hidden]="!show">   Hiding html element        </p>
          </div>
          `,
    styles: [``]
})

export class If2Component implements OnInit {

//1)
  show: boolean = true
  constructor() { }

  ngOnInit() {
  }

}