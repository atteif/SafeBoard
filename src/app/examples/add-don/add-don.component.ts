import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Don} from '../../model/Don';
import {ApiService} from '../../api.service';
import {Needs} from '../../model/Needs';
import {Router} from '@angular/router';
import {Sum} from '../../model/Sum';

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
    nbr: Sum[] = [];
    headers;

    constructor(private service: ApiService,
                private routes: Router) {
    }

    ngOnInit(): void {
        this.need = new Needs();
        this.need = this.service.getSelectedNeed();
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
        this.service
            .addDon(this.don)
            .subscribe(resp => {
                return this.spresp.push(resp);
            });
        this.service.updateNeedsObject(this.needs);
        this.routes.navigateByUrl('/donation');
    }

}
