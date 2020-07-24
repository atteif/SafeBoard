import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApiService} from '../../api.service';
import {Don} from '../../model/Don';
import * as Rellax from 'rellax';
import {Needs} from '../../model/Needs';
import {Router} from '@angular/router';
import {Sum} from '../../model/Sum';

@Component({
    selector: 'app-donation',
    templateUrl: './donation.component.html',
    styleUrls: ['./donation.component.css']
})
export class DonationComponent implements OnInit {
    dons: Don[] = [];
    needs: Needs[] = [];
    nbr: Sum[] = [];
    data: Date = new Date();
    headers;
    private st: any;
    private need: Needs;
    spresp: any = [];

    constructor(private http: HttpClient,
                private api: ApiService,
                private routes: Router) {
    }

    ngOnInit() {
        this.getAllNeeds();
        this.getAllData();
        this.api.updateNeedsObject(this.needs);
        const rellaxHeader = new Rellax('.rellax-header');

        const body = document.getElementsByTagName('body')[0];
        body.classList.add('landing-page');
        const navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');

    }

    getAllData() {
        this.api.getDons()
            .subscribe(resp => {
                const keys = resp.headers.keys();
                this.headers = keys.map(key =>
                    `${key}: ${resp.headers.get(key)}`);

                for (const data of resp.body) {
                    this.dons.push(data);
                }
            });
    }

    getAllNeeds() {
        this.api.getNeed()
            .subscribe(resp => {
                const keys = resp.headers.keys();
                this.headers = keys.map(key =>
                    `${key}: ${resp.headers.get(key)}`);

                for (const data of resp.body) {
                    console.log(data);
                    this.needs.push(data);
                }
            });

    }

    ngOnDestroy() {
        const body = document.getElementsByTagName('body')[0];
        body.classList.remove('landing-page');
        const navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
    }

    addDon(need: Needs) {
        this.api.setSelectedNeed(need);
        this.routes.navigateByUrl('/addDon');
    }

    deleteDon(need: Needs) {
        this.api
            .deleteNeed(need)
            .subscribe(resp => {
                return this.needs.push(resp);
            });
    }
}
