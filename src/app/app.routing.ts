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
import {DonationComponent} from './examples/donation/donation.component';
import {AddDonComponent} from './examples/add-don/add-don.component';
import {NeedsChartComponent} from './examples/needs-chart/needs-chart.component';

import {EventComponent} from './components/event/event.component';
import {AddEventComponent} from './components/add-event/add-event.component';
import {UsersComponent} from './components/users/users.component';
import {AddUserComponent} from './components/add-user/add-user.component';

const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'refugees',                component: ComponentsComponent },

    { path: 'donation',     component: DonationComponent },
    { path: 'event',          component: EventComponent },
    { path: 'lostfound',       component: LostandfoundComponent },
    { path: 'newlostfound',       component: NewlostandfoundComponent },
    { path: 'profile',     component: ProfileComponent },
    { path: 'aaaa',       component: LostandfoundComponent },
    { path: 'addDon',       component: AddDonComponent },
    { path: 'login',       component: LoginComponent },
    { path: 'chart',       component: NeedsChartComponent },
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
