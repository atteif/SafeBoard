import { Component, OnInit } from '@angular/core';
import {Events} from '../model/Events';
import {HttpClient} from '@angular/common/http';
import {EventServiceService} from '../event/service/event-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {
event: Events = new Events();
spresp: any;
submitted = false;
  constructor(public api: EventServiceService, private router: Router) { }

  ngOnInit(): void {
  }
  addEvent() {

    this.api.addEvent(this.event).subscribe(resp => {
      return this.spresp.push(resp);
    });
    console.log(this.event);
  }
}
