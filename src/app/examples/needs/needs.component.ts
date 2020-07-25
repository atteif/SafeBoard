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


  constructor(private api: ApiService, private routes: Router) { }
  addDon(need: Needs) {
    this.api.setSelectedNeed(need);
    console.log(need);
    this.routes.navigateByUrl('/addDon');
  }
  ngOnInit(): void {
  }



}
