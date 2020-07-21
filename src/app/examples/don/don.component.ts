import {Component, Input, OnInit} from '@angular/core';
import {Don} from '../../model/Don';
import {Needs} from '../../model/Needs';

@Component({
  selector: 'app-don',
  templateUrl: './don.component.html',
  styleUrls: ['./don.component.css']
})
export class DonComponent implements OnInit {
@Input()
don: Don;
  constructor() { }

  ngOnInit(): void {
  }

}
