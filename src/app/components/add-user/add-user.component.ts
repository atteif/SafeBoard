import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../services/users.service';
import {Users} from '../../model/Users';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
user: Users = new Users();
sresp: any;
  constructor(private api: UsersService) { }

  ngOnInit(): void {
  }
addUser() {
    this.api.addUser(this.user).subscribe(resp => {
      return this.sresp.push(resp);
    });
    console.log(this.user);
}
}
