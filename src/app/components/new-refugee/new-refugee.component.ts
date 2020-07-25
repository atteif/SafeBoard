import {Component, Input, OnInit} from '@angular/core';

import {Refugee} from '../refugee/models/Refugee';
import {HttpClient} from '@angular/common/http';
import {RefugeeService} from '../refugee/services/refugee.service';
import {Route, Router} from '@angular/router';
import {FormControl, Validators} from '@angular/forms';
import {Benevole} from '../refugee/models/Benevole';
import {valueReferenceToExpression} from '@angular/compiler-cli/src/ngtsc/annotations/src/util';

@Component({
  selector: 'app-new-refugee',
  templateUrl: './new-refugee.component.html',
  styleUrls: ['./new-refugee.component.css']
})
export class NewRefugeeComponent implements OnInit {
  name:string;
  headers;
  benevoles:Benevole[] =[];
    benevoless:Benevole[] =[];

    benevole :Benevole[]=[] ;
    ben : Benevole;
  locationControl = new FormControl('', Validators.required);
  selectFormControl = new FormControl('', Validators.required);
  ref: Refugee = new Refugee();
  submitted = false;
  spresp: any;
  id: number = 0;
  constructor(http: HttpClient , private refugeeService: RefugeeService, private route: Router) { }

  ngOnInit(): void {
      this.getBenByloc(this.ref.location);
      this.getAllBen();

  }
  addRefugee() {
      this.getAllBen();
      console.log(this.benevoless);
    this.benevole=  this.benevoless.filter(value => value.location == this.ref.location).filter(value => value.nb_ref <5);
    if(this.benevole.length==0){
        this.benevole=  this.benevoless.filter(value => value.nb_ref <5);
    }

    console.log(this.benevole[0].id);
    this.ref.benevole_id = this.benevole[0].id;
    console.log(this.benevole[0].nb_ref);
      this.benevole[0].nb_ref =  this.benevole[0].nb_ref + 1 ;
      if( this.benevole[0].nb_ref==5){
          this.benevole[0].is_available = false;
      }
      console.log(this.benevole[0]);
 this.updateBene(this.benevole[0]);
console.log(this.benevole[0].nb_ref);
    this.refugeeService
        .addRefugee(this.ref)
        .subscribe(resp => {
          return this.spresp.push(resp);
        });
    this.route.navigateByUrl('/refugee')
  }
getBenByloc(loc){
      console.log( this.refugeeService.getBen(loc));
    this.refugeeService.getBen(loc).subscribe(resp =>  {
    const keys = resp.headers.keys();
    console.log(keys);
    this.headers = keys.map(key =>
        `${key}: ${resp.headers.get(key)}`);
    for (const data of resp.body) {
      this.benevoles.push(data);
   ;}
  });
    console.log(this.benevoles[0]);
}

getAllBen(){
    this.refugeeService.getBenALL().subscribe(resp =>  {
        const keys = resp.headers.keys();
        this.headers = keys.map(key =>
            `${key}: ${resp.headers.get(key)}`);
        for (const data of resp.body) {
            this.benevoless.push(data);        }
    });
}

    updateBene(ben) {
        console.log(ben);
        this.refugeeService.updateBen(ben)
            .subscribe(resp => {
                return this.spresp.push(resp);
            });
        this.route.navigateByUrl('/refugee')
    }

}
