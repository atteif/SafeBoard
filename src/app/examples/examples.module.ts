import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { AgmCoreModule } from '@agm/core';

import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { ExamplesComponent } from './examples.component';

import { AssociationComponent } from './association/association.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AssociationChildComponent } from './association-child/association-child.component';
import { AddAssociationComponent } from './add-association/add-association.component';
import {RouterModule} from '@angular/router';


import { DonationComponent } from './donation/donation.component';
import { DonComponent } from './don/don.component';
import {NgCircleProgressModule} from 'ng-circle-progress';
import { NeedsComponent } from './needs/needs.component';
import { AddDonComponent } from './add-don/add-don.component';
import {RouterModule} from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { NeedsChartComponent } from './needs-chart/needs-chart.component';
import {ChartsModule} from 'ng2-charts';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        NouisliderModule,
        JwBootstrapSwitchNg2Module,
        AgmCoreModule.forRoot({
            apiKey: 'YOUR_KEY_HERE'
        }),

        ReactiveFormsModule,
        MatFormFieldModule,
        RouterModule

        NgCircleProgressModule,
        RouterModule,
        MatFormFieldModule,
        MatDatepickerModule,
        ReactiveFormsModule,
        ChartsModule

    ],
    declarations: [
        LandingComponent,
        LoginComponent,
        ExamplesComponent,
        ProfileComponent,

        AssociationComponent,
        AssociationChildComponent,
        AddAssociationComponent


        DonationComponent,
        DonComponent,
        NeedsComponent,
        AddDonComponent,
        NeedsChartComponent

    ]
})
export class ExamplesModule { }
