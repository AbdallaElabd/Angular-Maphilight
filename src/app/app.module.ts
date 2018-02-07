import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms'
import { UIRouterModule } from "@uirouter/angular";

import { MaphilightModule } from './maphilight/maphilight.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Example1Component } from './example1/example1.component';
import { Example2Component } from './example2/example2.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MaphilightModule,
    UIRouterModule.forRoot({ states: [
      {
        name: 'home',
        url: '/home',
        component: HomeComponent
      },
      {
        name: 'example1',
        url: '/example1',
        component: Example1Component
      },
      {
        name: 'example2',
        url: '/example2',
        component: Example2Component
      },
    ], useHash: true }),
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    Example1Component,
    Example2Component,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
