import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { LandingComponent } from './examples/landing/landing.component';
import { LoginComponent } from './examples/login/login.component';
import { ProfileComponent } from './examples/profile/profile.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import {AssociationComponent} from './examples/association/association.component';

import {HttpClientJsonpModule, HttpClientModule, HttpHeaderResponse} from '@angular/common/http';
import {AddAssociationComponent} from './examples/add-association/add-association.component';
import {UsersComponent} from './components/users/users.component';
import {AddUserComponent} from './components/add-user/add-user.component';

const routes: Routes = [
    { path: '', redirectTo: 'refugees', pathMatch: 'full' },
    { path: 'refugees',                component: ComponentsComponent },
    { path: 'event',          component: NucleoiconsComponent },
    { path: 'donation',     component: LandingComponent },
    { path: 'lostfound',       component: LoginComponent },
    { path: 'association',     component: AssociationComponent },
    { path: 'addAssociation',     component: AddAssociationComponent },
    { path: 'addUser',     component: AddUserComponent },
    { path: 'users',     component: UsersComponent }
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes, {useHash: true}),
        HttpClientModule,
        HttpClientJsonpModule
    ],
    exports: [
    ],
})
export class AppRoutingModule { }
