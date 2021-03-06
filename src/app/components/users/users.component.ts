import { Component, OnInit } from '@angular/core';


import {Users} from '../model/Users';


import {HttpClient} from '@angular/common/http';
import {UsersService} from '../../services/users.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  headers;
  users: Array<Users>

  constructor(private http: HttpClient, public api: UsersService) { }

  ngOnInit(): void {
    this.users = [];
    this.getUsers();
  }
  getUsers() {
    this.api.getUser().subscribe(resp => {
      console.log(resp);
      const keys = resp.headers.keys();
      this.headers = keys.map(key => `${key}:${resp.headers.get(key)}`);
      for (const data of resp.body) {
        this.users.push(data);
      }
    });
  }

}
