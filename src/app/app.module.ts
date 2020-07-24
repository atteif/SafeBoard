import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { ExamplesModule } from './examples/examples.module';
import { MatSelectModule } from '@angular/material/select'
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatButtonModule} from '@angular/material/button';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { from } from 'rxjs';
import { NgCircleProgressModule } from 'ng-circle-progress';
import {ChartsModule} from 'ng2-charts';


const modules = [
    MatDatepickerModule
];
@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent
    ],
    imports: [
        NgbModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatSliderModule,
        MatInputModule,
        MatFormFieldModule,
        MatSelectModule,
        MatButtonModule,
        // MatLabel,
        BrowserAnimationsModule,
        HttpClientModule,
        FormsModule,
        RouterModule,
        AppRoutingModule,
        ComponentsModule,
        ExamplesModule,
        GooglePlaceModule,
        ChartsModule
    ],
    providers: [

    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
