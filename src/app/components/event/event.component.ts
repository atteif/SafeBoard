import { Component, OnInit } from '@angular/core';
import {Events} from '../model/Events';
import {HttpClient} from '@angular/common/http';
import {EventServiceService} from './service/event-service.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
headers;
events: Array<Events>;
  constructor(private http: HttpClient, public api: EventServiceService) { }

  ngOnInit(): void {
    this.events = [];
    this.getEvents();
  }
getEvents() {
    this.api.getEvent().subscribe(resp => {
      console.log(resp);
      const keys = resp.headers.keys();
      this.headers = keys.map(key => `${key}:${resp.headers.get(key)}`);
      for (const data of resp.body) {
        this.events.push(data);
      }
    });
}
}
