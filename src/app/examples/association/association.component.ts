import { Component, OnInit } from '@angular/core';
import {AssociationService} from '../../services/association.service';
import {Association} from '../../model/Association';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-association',
  templateUrl: './association.component.html',
  styleUrls: ['./association.component.css']
})
export class AssociationComponent implements OnInit {
 headers;
  listAssociation: Association[] = [];
  constructor(private router: Router, public api: AssociationService) { }

  ngOnInit() {
      this.listAssociation = [];
      this.getAllAssociation();


  }

  getAllAssociation() {
        this.api.getAllAssociations().subscribe(resp => {
            console.log(resp);
            const  keys = resp.headers.keys();
            this.headers = keys.map(key =>
            `${key}: ${resp.headers.get(key)}`);
            for (const data of resp.body) {
                this.listAssociation.push(data);

            }
        });
    }
    addAssociation() {

      this.router.navigateByUrl('/addAssociation');
    }
}
