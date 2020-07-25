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
  focus;
  focus1;
  constructor(public api: UsersService, private router: Router) { }

  ngOnInit(): void {
    this.user =new Users();
  }
  addUser() {

    this.api.addUser(this.user).subscribe(resp => {
      return this.spresp.push(resp);
    });
    console.log(this.user);
  }
login() {
  console.log(this.user);
  this.user.role_type = "admin";
  this.user.login=this.user.last_name;

  this.api.addUser(this.user).subscribe(resp => {
      return this.spresp.push(resp);
    });
  this.router.navigateByUrl('/login');

}
}
