import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApiService} from '../../api.service';
import {Don} from '../../model/Don';
import * as Rellax from 'rellax';
import {Needs} from '../../model/Needs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.css']
})
export class DonationComponent implements OnInit {
dons: Don[] = [];
needs: Needs[] = [];
    data: Date = new Date();
   headers;
constructor(private http: HttpClient,
            private api: ApiService,
            private routes: Router) { }

  ngOnInit() {
  this.getAllNeeds();
  this.getAllData();



      var rellaxHeader = new Rellax('.rellax-header');

      var body = document.getElementsByTagName('body')[0];
      body.classList.add('landing-page');
      var navbar = document.getElementsByTagName('nav')[0];
      navbar.classList.add('navbar-transparent');
  }
  getAllData() {
    this.api.getNews()
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
        this.api.getNeeds()
            .subscribe(resp => {
                const keys = resp.headers.keys();
                this.headers = keys.map(key =>
                    `${key}: ${resp.headers.get(key)}`);

                for (const data of resp.body) {
                    this.needs.push(data);
                }
            });
    }
    ngOnDestroy(){
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('landing-page');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
    }
    addDon( need: Needs) {
        this.api.setSelectedNeed(need);
    console.log(need);
    this.routes.navigateByUrl('/addDon');
    }


}
