import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router'; //1) import Routes and RoterModule

import { AppComponent } from './app.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { EventsListComponent } from './components/events-list/events-list.component';
//after Installing the Angular connector, the core package, and FullCalendarApp plugins
import { FullCalendarModule } from '@fullcalendar/angular';
import { Eventdo1Component } from './components/eventdo1/eventdo1.component';
import { Eventdo2Component } from './components/eventdo2/eventdo2.component'; //connect FullCalendarModule

const appRoute: Routes = [
  {path: 'home', component: HomePageComponent},
  {path: 'login', component: UserLoginComponent},
  {path: 'events', component: EventsListComponent}
]//3) create a routes


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    UserLoginComponent,
    EventsListComponent,
    Eventdo1Component,
    Eventdo2Component,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoute),//2) add RouterModule to imports
    FullCalendarModule,  // register FullCalendar with your app
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
