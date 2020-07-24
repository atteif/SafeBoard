import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { LandingComponent } from './examples/landing/landing.component';
import { LoginComponent } from './examples/login/login.component';
import { ProfileComponent } from './examples/profile/profile.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { LostandfoundComponent } from './components/lostandfound/lostandfound.component';
import { NewlostandfoundComponent } from './components/lostandfound/newlostandfound/newlostandfound.component';
import {EventComponent} from './components/event/event.component';
import {AddEventComponent} from './components/add-event/add-event.component';
import {UsersComponent} from './components/users/users.component';
import {AddUserComponent} from './components/add-user/add-user.component';

const routes: Routes =[
    { path: '', redirectTo: 'refugees', pathMatch: 'full' },
    { path: 'refugees',                component: ComponentsComponent },
    { path: 'event',          component: EventComponent },
    { path: 'donation',     component: LandingComponent },
    { path: 'lostfound',       component: LostandfoundComponent },
    { path: 'newlostfound',       component: NewlostandfoundComponent },
    { path: 'association',     component: ProfileComponent },
    { path: 'aaaa',       component: LostandfoundComponent },
    { path: 'addEvent',       component: AddEventComponent },
    { path: 'users',       component: UsersComponent },
    { path: 'addUser',       component: AddUserComponent }
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
    ],
})
export class AppRoutingModule { }
