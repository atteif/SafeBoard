import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Needs} from '../../model/Needs';
import {ApiService} from '../../api.service';
import {Router} from '@angular/router';
import {Sum} from '../../model/Sum';

@Component({
  selector: 'app-needs',
  templateUrl: './needs.component.html',
  styleUrls: ['./needs.component.css']
})
export class NeedsComponent implements OnInit {
@Input()
need: Needs;

  nbr: Sum[] = [];

  headers;

  constructor(private api: ApiService, private routes: Router) { }
  addDon(need: Needs) {
    this.api.setSelectedNeed(need);
    console.log(need);
    this.routes.navigateByUrl('/addDon');
  }
  ngOnInit(): void {
    this.api.getDonValueByNeedsCategory1(this.need.category, this.need.id)
        .subscribe(resp => {
          const keys = resp.headers.keys();
          this.headers = keys.map(key =>
              `${key}: ${resp.headers.get(key)}`);

          for (const data of resp.body) {
            this.nbr.push(data);
            console.log(data);

            this.nbr.forEach(e => {
              if (e.nb > this.need.value) {
                const i = this.nbr.indexOf(e);
                this.nbr.splice(i, 1);
                console.log(this.need);
                this.api.deleteNeedsFromList(this.need);
              }
              const i = this.nbr.indexOf(e);
              this.nbr.splice(i, 1);
            });
          }
        });
  }



}
