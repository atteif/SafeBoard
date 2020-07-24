import {Component, OnInit} from '@angular/core';
import {Users} from '../../components/model/Users';
import {Router} from '@angular/router';
import {UsersService} from '../../services/users.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    headers;
    users: Users[] = [];
    loggedUsers: Users[] = [];

    data: Date = new Date();
    focus;
    focus1;
    user: Users = new Users();

    constructor(private routes: Router, private service: UsersService) {
    }

    ngOnInit() {
        this.user=new Users();
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('login-page');

        var navbar = document.getElementsByTagName('nav')[0];
        navbar.hidden = true;
        navbar.classList.add('navbar-transparent');

        this.service.getUser().subscribe(resp => {
            const keys = resp.headers.keys();
            this.headers = keys.map(key =>
                `${key}: ${resp.headers.get(key)}`);

            for (const data of resp.body) {
                this.loggedUsers.push(data);
            }
        });
        console.log(this.loggedUsers);
    }

    ngOnDestroy() {
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('login-page');

        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
    }

    login() {
       if(this.loggedUsers.filter(user => user.login== this.user.login).filter(user => user.password == this.user.password).length != 0) {
            var navbar = document.getElementsByTagName('nav')[0];
            navbar.hidden = false;
            this.service.setLoggedUser(this.user);
            this.routes.navigateByUrl('/profile');

        } else {
            var navbar = document.getElementsByTagName('nav')[0];
            navbar.hidden = false;
        }
    }


}
