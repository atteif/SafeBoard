import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Users} from '../model/Users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(public http: HttpClient) { }

  getAllUsers(): Observable<HttpResponse<Users[]>> {
    return  this.http.get<Users[]>('http://localhost:8080/SafeDevPI/web/app_dev.php/getAllUsers', {observe: 'response'});
  }
  addUser(user: Users): Observable<any> {
    const headers =
        new Headers({'Content-Type':
              'application/json'});
    return this.http.post('http://localhost:8080/SafeDevPI/web/app_dev.php/addUser' , user);
  }
}
