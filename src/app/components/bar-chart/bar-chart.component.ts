import {Component, OnInit} from '@angular/core';
import {ChartOptions, ChartType, ChartDataSets} from 'chart.js';
import {Label} from 'ng2-charts';
import {RefugeeService} from '../refugee/services/refugee.service';
import {Router} from '@angular/router';
import {iterator} from 'rxjs/internal-compatibility';
import {count} from '../refugee/models/count';

@Component({
    selector: 'app-bar-chart',
    templateUrl: './bar-chart.component.html',
    styleUrls: ['./bar-chart.component.css']
})

export class BarChartComponent implements OnInit {
    headers;
    count: count[] = [];
    number: number[] = [];
    location : string[] = [];
    loc: string;

    constructor(private service: RefugeeService, private routes: Router) {
    }

    ngOnInit(): void {
        this.getcountByloc();

    }

    barChartOptions: ChartOptions = {
        responsive: true,
    };
    barChartLabels: Label[] = this.location;
    barChartType: string = 'bar';
    barChartLegend = true;
f: string;

    barChartData = [
        {data: this.number, label: 'Number Refugees'}
        ];

    getcountByloc() {
            this.service.getCountRef().subscribe(resp => {
                const keys = resp.headers.keys();
                this.headers = keys.map(key =>
                    `${key}: ${resp.headers.get(key)}`);
                for (const data of resp.body) {
                    this.count.push(data);
                    this.count.forEach(e => {
                        this.number.push(e.c) , this.location.push(e.location);
                      this.count.splice(this.count.indexOf(e),1);
                    })

                }
            });


    }
}

