import {Component, Input, OnInit} from '@angular/core';
import {Events} from '../model/Events';

@Component({
  selector: 'app-event-child',
  templateUrl: './event-child.component.html',
  styleUrls: ['./event-child.component.css']
})
export class EventChildComponent implements OnInit {
  @Input() event: Events;

  constructor() { }

  ngOnInit(): void {
  }

}
