import {Component, Input, OnInit} from '@angular/core';
import {Refugee} from '../refugee/models/Refugee';

@Component({
  selector: 'app-refuge-child',
  templateUrl: './refuge-child.component.html',
  styleUrls: ['./refuge-child.component.css']
})
export class RefugeChildComponent implements OnInit {
  @Input() refuge: Refugee;
  constructor() { }

  ngOnInit(): void {
  }

}
