import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../services/users.service';
import {Users} from '../../model/Users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  headers;
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
}
