import {Component, Input, OnInit} from '@angular/core';
import {Needs} from '../../model/Needs';

@Component({
  selector: 'app-needs',
  templateUrl: './needs.component.html',
  styleUrls: ['./needs.component.css']
})
export class NeedsComponent implements OnInit {
@Input()
need: Needs;
  constructor() { }

  ngOnInit(): void {
  }

}
