import { Component, OnInit } from '@angular/core';
import {Users} from '../model/Users';
import {EventServiceService} from '../event/service/event-service.service';
import {Router} from '@angular/router';
import {UsersService} from '../../services/users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  user: Users = new Users();
  spresp: any;

  constructor(public api: UsersService, private router: Router) { }

  ngOnInit(): void {
  }
  addUser() {

    this.api.addUser(this.user).subscribe(resp => {
      return this.spresp.push(resp);
    });
    console.log(this.user);
  }

}
