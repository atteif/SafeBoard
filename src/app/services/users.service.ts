import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Events} from '../components/model/Events';
import {Users} from '../components/model/Users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  _user: Users

  constructor(private http: HttpClient) { }
  getUser(): Observable<HttpResponse<Users[]>> {
    return this.http.get<Users[]>(
        `http://localhost/SafeDevPI/web/app_dev.php/getAllUsers`, {observe: 'response'});
  }
  addUser(user: Users): Observable<any> {
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post('http://localhost/SafeDevPI/web/app_dev.php/addUser', user);
  }
  getSelectedNeed(): Users {
    const temp = this._user;
    this.clearData();
    return temp;
  }

  clearData() {
    this._user = undefined;
  }

  setSelectedNeed(user) {
    this._user = user;
  }
}
