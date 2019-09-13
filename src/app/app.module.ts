import { Component, Input ,ViewEncapsulation,AfterViewInit,ElementRef} from '@angular/core';
import { NgModule, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app/app.component';
import { SidebarComponent } from './app/components/sidebar.component';
import { IfComponent,MessageComponent} from './app/components/conditional_statements/if.component';

import { If2Component } from './app/components/conditional_statements/if2.component';
import { PersonComponent } from './app/components/some_eg/person.component';
import { HellowComponent } from './app/components/_1_basic/hellow.component';
import { InterpolationComponent } from './app/components/_1_basic/interpolation.component';


// page components
@Component({
  selector: 'Home',
  template: `<h1>Home page</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HomeComponent {

}


//----------------------------------------------------
//Router module
const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'hellow', component: HellowComponent },

    { path: 'ngif', component: IfComponent },
    { path: 'ngif2', component: If2Component },

      
  //{ path: 'C', component: CComponent, outlet: 'secondRouter' },
  //{ path: 'D', component: DComponent, outlet: 'secondRouter' }
  //{ path: '**', component: DefaultLayoutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{enableTracing: false, useHash: false})],
  exports: [RouterModule]
})
export class RootRoutingModule { }

//----------------------------------------------------
@NgModule({
  imports: [BrowserModule, FormsModule, RootRoutingModule],
  declarations: [
    AppComponent, 
    HomeComponent, 
 
    SidebarComponent, 
    IfComponent,
    MessageComponent,
    If2Component,
    PersonComponent,
    HellowComponent,
    InterpolationComponent
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
