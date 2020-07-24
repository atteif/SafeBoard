import {Component, Input, OnInit} from '@angular/core';
import {Users} from '../../model/Users';

@Component({
  selector: 'app-users-child',
  templateUrl: './users-child.component.html',
  styleUrls: ['./users-child.component.css']
})
export class UsersChildComponent implements OnInit {
@Input()
user: Users;
  constructor() { }

  ngOnInit(): void {
  }

}
