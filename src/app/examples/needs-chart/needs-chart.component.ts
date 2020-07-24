import {Component, Input, OnInit} from '@angular/core';
import {Label, MultiDataSet} from 'ng2-charts';
import {ChartType} from 'chart.js';
import {Needs} from '../../model/Needs';
import {ApiService} from '../../api.service';
import {Sum} from '../../model/Sum';

@Component({
    selector: 'app-needs-chart',
    templateUrl: './needs-chart.component.html',
    styleUrls: ['./needs-chart.component.css']
})
export class NeedsChartComponent implements OnInit {

@Input()
need: Needs = new Needs();
    nbr: Sum[] = [];
headers;
nb: Sum = new Sum();
    doughnutChartLabels: Label[] = [];
    doughnutChartData: number[] = [];
    doughnutChartType: ChartType = 'doughnut';

    constructor(private service: ApiService) {
    }

    ngOnInit(): void {
        this.doughnutChartLabels.push(this.need.category);
        this.doughnutChartLabels.push('Dons value');
this.nbr.shift()
        this.doughnutChartData.push(this.need.value);
        this.getDonValueByNeeds(this.need);

      //  this.doughnutChartData.push(this.nb.nb);
        console.log(this.nbr);
    }


    getDonValueByNeeds(need: Needs) {
        this.service.getDonValueByNeedsCategory1(need.category, need.id)
            .subscribe(resp => {
                const keys = resp.headers.keys();
                this.headers = keys.map(key =>
                    `${key}: ${resp.headers.get(key)}`);

                for (const data of resp.body) {
                    this.nbr.push(data);
                    console.log(data);
                    console.log(need);
                    this.nbr.forEach(e => {
                        this.doughnutChartData.push(e.nb);
                    });
                }
            });
    }
}
