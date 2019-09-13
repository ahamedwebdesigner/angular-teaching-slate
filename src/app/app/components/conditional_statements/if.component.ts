import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-if',
    host: { 'class' : 'pinkbox component'},
    template: `<h6> IfComponent </h6>
            
             <div class="component greenbox">
             <!--  //1) on html elements -->
               
                <h1 *ngIf="show">Show this heading only if "show variable" is true</h1>
                <h1 *ngIf="!show">This dosent Show this heading only if "show variable" is true</h1>

             <!--   //2) On nested elements -->
               <div *ngIf="show" class="component pinkbox">
                  <p>Show this only if "show" is true</p>
                </div>
              </div>  


              <!--  //3) on custome components  -->
              <app-message *ngIf="show"></app-message>

        
              `,
    styles: [``]
})
export class IfComponent implements OnInit {

  //1)
  show: boolean = true

  message: boolean = true;
  user: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}



@Component({
    selector: 'app-message',
    template: `<div>
                    <h6> MessageComponent </h6>
                    <h1> hellow this is child component shone in parent component </h1>
               </div>`,
     host: { 'class' : 'MessageComponent component'},
    styles: [`:host {}`]
})
export class MessageComponent implements OnInit {
 constructor() { }
  ngOnInit() { 

   }
}

