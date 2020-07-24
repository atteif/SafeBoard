import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import {UsersService} from '../../services/users.service';
import {Users} from '../../model/Users';
=======
import {Users} from '../model/Users';
import {HttpClient} from '@angular/common/http';
import {UsersService} from '../../services/users.service';
>>>>>>> 51f35ecee9e46a411719a93714c2b04ff2d014b5

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  headers;
<<<<<<< HEAD
listUsers: Users[] = [];
  constructor(public api: UsersService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }
getAllUsers() {
  this.api.getAllUsers().subscribe(resp => {
    console.log(resp);
    const  keys = resp.headers.keys();
    this.headers = keys.map(key =>
        `${key}: ${resp.headers.get(key)}`);
    for (const data of resp.body) {
      this.listUsers.push(data);
    }
  });
}
=======
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
>>>>>>> 51f35ecee9e46a411719a93714c2b04ff2d014b5
}
