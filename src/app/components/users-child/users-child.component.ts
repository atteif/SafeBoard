import {Component, Input, OnInit} from '@angular/core';
<<<<<<< HEAD
import {Users} from '../../model/Users';
=======
import {Users} from '../model/Users';
>>>>>>> 51f35ecee9e46a411719a93714c2b04ff2d014b5

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
