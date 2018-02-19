import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes }  from '@angular/router';

import { CalendarCreateComponent } from '../components/calendar-create/calendar-create.component';
import { CalendarListComponent } from '../components/calendar-list/calendar-list.component';
import { CalendarSubComponent } from '../components/calendar-sub/calendar-sub.component'; 
import { EventCreateComponent } from '../components/event-create/event-create.component';
import { AboutComponent } from '../components/about/about.component';

import { LoginComponent } from '../components/login/login.component';
import { RegisterComponent } from '../components/register/register.component';
import { ForgetPasswordComponent } from '../components/forget-password/forget-password.component';
import { ProfileComponent } from '../components/profile/profile.component';
import { AuthGuardService } from '../services/auth-guard.service'

const appRoutes: Routes = [
  { path: 'calendar', component: CalendarListComponent },
  { path: 'calendar/create', component: CalendarCreateComponent, canActivate: [AuthGuardService]},
  { path: 'calendar/list', component: CalendarListComponent },
  { path: 'calendar/sub', component: CalendarSubComponent, canActivate: [AuthGuardService] },
  { path: 'event/create', component: EventCreateComponent, canActivate: [AuthGuardService] },
  { path: 'about', component: AboutComponent },
  { path: 'account/login', component: LoginComponent },
  { path: 'account/register', component: RegisterComponent },
  { path: 'account/forgetPassword', component: ForgetPasswordComponent },
  { path: 'account/profile', component: ProfileComponent, canActivate: [AuthGuardService] },
  { path: '', redirectTo: '/calendar', pathMatch: 'full' },
  { path: '**', redirectTo: '/calendar', pathMatch: 'full'},
  // { path: 'userlist', component: UserListComponent, canActivate: [AuthGuardService] },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
