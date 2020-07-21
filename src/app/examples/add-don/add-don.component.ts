import {Component, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Don} from '../../model/Don';
import {ApiService} from '../../api.service';
import {Needs} from '../../model/Needs';
import * as Rellax from 'rellax';

@Component({
  selector: 'app-add-don',
  templateUrl: './add-don.component.html',
  styleUrls: ['./add-don.component.css']
})
export class AddDonComponent implements OnInit {
  need: Needs;
  spresp: any;
  don: Don = new Don();
  donForm = new FormGroup({
    'value': new FormControl('', Validators.required),
    'category': new FormControl('', Validators.required),
    'idNeeds': new FormControl('', Validators.required)


  });
  constructor(private service: ApiService) { }

  ngOnInit(): void {
  this.need = new Needs();

    var rellaxHeader = new Rellax('.rellax-header');
    var body = document.getElementsByTagName('body')[0];
    body.classList.add('landing-page');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');
  }
  addDon() {
this.need = new Needs();
this.need = this.service.getSelectedNeed();
    this.don.idNeeds = this.need.id;
    this.service
        .addDon(this.don)
        .subscribe(resp => {
          return this.spresp.push(resp);
        });
  }


}
