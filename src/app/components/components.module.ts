import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { RouterModule } from '@angular/router';
import { BasicelementsComponent } from './basicelements/basicelements.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TypographyComponent } from './typography/typography.component';
import { NucleoiconsComponent } from './nucleoicons/nucleoicons.component';
import { ComponentsComponent } from './components.component';
import { NotificationComponent } from './notification/notification.component';
import { NgbdModalBasic } from './modal/modal.component';
import { LostandfoundComponent } from './lostandfound/lostandfound.component';
import { MatSliderModule } from '@angular/material/slider';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule} from '@angular/material/button';
import { from } from 'rxjs';
import { NewlostandfoundComponent } from './lostandfound/newlostandfound/newlostandfound.component';


import { RefugeeComponent } from './refugee/refugee.component';

import { RefugeChildComponent } from './refuge-child/refuge-child.component';
import { NewRefugeeComponent } from './new-refugee/new-refugee.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import {ChartsModule} from 'ng2-charts';
import { BarBenChartComponent } from './bar-ben-chart/bar-ben-chart.component';
import { EventComponent } from './event/event.component';
import { EventChildComponent } from './event-child/event-child.component';
import { AddEventComponent } from './add-event/add-event.component';

import { UsersComponent } from './users/users.component';
import { UsersChildComponent } from './users-child/users-child.component';
import { AddUserComponent } from './add-user/add-user.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        NouisliderModule,
        RouterModule,
        JwBootstrapSwitchNg2Module,
        MatSliderModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        MatSelectModule,
        MatButtonModule,
        ReactiveFormsModule,
        ChartsModule,
        MatDatepickerModule ,
         MatSelectModule ,
         MatButtonModule
        // MatLabel
    ],
    declarations: [
        ComponentsComponent,
        BasicelementsComponent,
        NavigationComponent,
        TypographyComponent,
        NucleoiconsComponent,
        NotificationComponent,
        LostandfoundComponent,
        NgbdModalBasic,
        NewlostandfoundComponent,


        RefugeeComponent,

        RefugeChildComponent,

        NewRefugeeComponent,

        BarChartComponent,
        RefSprint

        BarBenChartComponent

        EventComponent,
        EventChildComponent,
        AddEventComponent,
        UsersComponent,
        UsersChildComponent,
        AddUserComponent

    ],
    exports: [ ComponentsComponent ]
})
export class ComponentsModule { }
