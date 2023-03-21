import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router'; //1) import Routes and RoterModule

import { AppComponent } from './app.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { EventsListComponent } from './components/events-list/events-list.component';
//after Installing the Angular connector, the core package, and FullCalendarApp plugins
import { FullCalendarModule } from '@fullcalendar/angular'; //connect FullCalendarModule

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
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoute),//2) add RouterModule to imports
    FullCalendarModule,  // register FullCalendar with your app
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
