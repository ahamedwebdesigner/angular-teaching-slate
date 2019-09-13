import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import { NavLinks } from './navlinks';



// main module
@Component({
  selector: 'main-app',
  templateUrl: './app.component.html',

  styles: [`h1 { font-family: Lato; }`],
  //encapsulation: ViewEncapsulation.None 
})
export class AppComponent implements AfterViewInit, OnInit {

  constructor(private elementRef: ElementRef) {
   
  }
  ngOnInit() {  }
  ngAfterViewInit() {
    this.elementRef.nativeElement.querySelector('.sidebar').classList.remove('open');
    // console.log(this.elementRef.nativeElement.querySelector('.toggle-btn'));
    //console.log(this.elementRef.nativeElement.querySelectorAll('.toggle-btn'));
    let elementsSidebar = this.elementRef.nativeElement.querySelector('.sidebar')
    let elements = this.elementRef.nativeElement.querySelectorAll('.toggle-btn');
    elements.forEach(element => {
      element.addEventListener('click', function () {
        elementsSidebar.classList.toggle('open');
      });
    });

    //sidebar
    //  this.elementRef.nativeElement.querySelector('my-element')
    //                            .addEventListener('click', this.onClick.bind(this));

  }


  handleSelected($event) {
    // hide element on initial state 
    let elementsSidebar = this.elementRef.nativeElement.querySelector('.sidebar');
    if ($event.target.checked === true) {
      //console.log($event.target.checked);
      console.log(elementsSidebar.classList)
      elementsSidebar.classList.add('open');
    } else {
      elementsSidebar.classList.remove('open');
    }
  }


}