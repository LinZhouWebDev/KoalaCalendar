import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CalendarCreateComponent } from './components/calendar-create/calendar-create.component';
import { CalendarListComponent } from './components/calendar-list/calendar-list.component';
import { CalendarSubComponent } from './components/calendar-sub/calendar-sub.component';
import { EventCreateComponent } from './components/event-create/event-create.component';
import { AboutComponent } from './components/about/about.component';
import { AppNavbarComponent } from './components/app-navbar/app-navbar.component';
import { LoginComponent } from './components/login/login.component';
import { AppRouter } from './app.routing';
import { RegisterComponent } from './components/register/register.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarCreateComponent,
    CalendarListComponent,
    CalendarSubComponent,
    EventCreateComponent,
    AboutComponent,
    AppNavbarComponent,
    LoginComponent,
    RegisterComponent,
    ForgetPasswordComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule, AppRouter
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
