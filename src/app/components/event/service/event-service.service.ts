import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Events} from '../../model/Events';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventServiceService {
  _event: Events;

  constructor(private http: HttpClient) { }
   getEvent(): Observable<HttpResponse<Events[]>> {
    return this.http.get<Events[]>(
        `http://localhost/SafeDevPI/web/app_dev.php/listEvent`, {observe: 'response'});
  }
    addEvent(event: Events): Observable<Events> {
        return this.http.post<Events>('http://localhost/SafeDevPI/web/app_dev.php/addEvent', event);
    }
    getSelectedEvent(): Events {
        const temp = this._event;
        this.clearData();
        return temp;
    }

    clearData() {
        this._event = undefined;
    }

    setSelectedNeed(event) {
        this._event = event;
    }
    addReservation
}
