import { Component, OnInit } from '@angular/core';
import { RefugeeService } from './services/refugee.service';
import { Refugee } from './models/Refugee';
import {Router} from '@angular/router';

@Component({
  selector: 'app-refugee',
  templateUrl: './refugee.component.html',
  styleUrls: ['./refugee.component.css']
})
export class RefugeeComponent implements OnInit {
  headers;
  refugees: Refugee[] = [];
  spresp: any;
  ref : Refugee;
  sum : any[] = [[]];

  constructor(private service: RefugeeService , private routes: Router) { }

  ngOnInit(): void {
    this.getAllRefugees();
    this.getSum();
  }

  getAllRefugees() {
    this.service.getRef().subscribe(resp =>  {
      const keys = resp.headers.keys();
      this.headers = keys.map(key =>
        `${key}: ${resp.headers.get(key)}`);
        for (const data of resp.body) {
        this.refugees.push(data);        }
        });
  }
  addRefugee() {
    this.routes.navigateByUrl('/newRefugee');
  }

    isComplete(ref) {
    console.log(ref.is_complete);
    ref.is_complete = true;
      this.service
          .updateRef(ref)
          .subscribe(resp => {
            return this.spresp.push(resp);
          });
      console.log(ref.is_complete);
      this.routes.navigateByUrl('/refugee')
    }

  getSum() {
    this.service.getSum().subscribe(resp =>  {
      const keys = resp.headers.keys();
      this.headers = keys.map(key =>
          `${key}: ${resp.headers.get(key)}`);
      for (const data of resp.body) {
        this.sum.push(data);        }
    });
  }

}

