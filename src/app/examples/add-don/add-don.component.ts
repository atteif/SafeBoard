import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Don} from '../../model/Don';
import {ApiService} from '../../api.service';
import {Needs} from '../../model/Needs';
import {Router} from '@angular/router';
import {Sum} from '../../model/Sum';
import {Users} from '../../components/model/Users';
import {UsersService} from '../../services/users.service';

@Component({
    selector: 'app-add-don',
    templateUrl: './add-don.component.html',
    styleUrls: ['./add-don.component.css']
})
export class AddDonComponent implements OnInit {
    spresp: any[];
    needs: Needs[] = [];
    don: Don = new Don();
    need: Needs;
    user: Users = new Users();
    nbr: Sum[] = [];
    headers;

    constructor(private service: ApiService,
                private routes: Router, private userService: UsersService) {
    }

    ngOnInit(): void {
        this.need = new Needs();
        this.need = this.service.getSelectedNeed();
        this.user = this.userService.getLoggedUser();
        this.getAllNeeds();


    }

    getAllNeeds() {
        this.service.getNeed()
            .subscribe(resp => {
                const keys = resp.headers.keys();
                this.headers = keys.map(key =>
                    `${key}: ${resp.headers.get(key)}`);

                for (const data of resp.body) {
                    console.log(data);
                    this.needs.push(data);
                }
            });

    }


    addDon() {
        this.don.idNeeds = this.need.id;
        this.don.category = this.need.category;
        this.don.id_donnator = this.user.id;
        console.log(this.user);
        console.log(this.don);

        this.service
            .addDon(this.don)
            .subscribe(resp => {
                return this.spresp.push(resp);
            });
        // this.service.updateNeedsObject(this.needs);
        // window.alert("Thank you for your donation");
        this.routes.navigateByUrl('/donation');
    }

}
