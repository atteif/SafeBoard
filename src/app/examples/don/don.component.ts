import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Don} from '../../model/Don';
import {ApiService} from '../../api.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-don',
    templateUrl: './don.component.html',
    styleUrls: ['./don.component.css']
})
export class DonComponent implements OnInit {
    @Input()
    don: Don;


    constructor(private api: ApiService, private routes: Router) {
    }

    ngOnInit(): void {


    }

}
