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
        `http://localhost:8080/SafeDevPI/web/app_dev.php/getAllUsers`, {observe: 'response'});
  }
  addUser(user: Users): Observable<Users> {
    return this.http.post<Users>('http://localhost:8080/SafeDevPI/web/app_dev.php/addUser', user);
  }
  getLoggedUser(): Users {
    const temp = this._user;
    this.clearData();
    return temp;
  }

  clearData() {
    this._user = undefined;
  }

  setLoggedUser(user) {
    this._user = user;
  }
  getUserByUsername(user: Users): Observable<HttpResponse<Users[]>> {
    return this.http.get<Users[]>(
        `http://localhost:8080/SafeDevPI/web/app_dev.php/getAllUsers/` + user.login, {observe: 'response'});

  }
}
