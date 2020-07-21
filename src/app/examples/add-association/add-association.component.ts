import { Component, OnInit } from '@angular/core';
import {Association} from '../../Entity/Association';
import {HttpClient} from '@angular/common/http';
import {AssociationService} from '../../services/association.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-association',
  templateUrl: './add-association.component.html',
  styleUrls: ['./add-association.component.css']
})
export class AddAssociationComponent implements OnInit {
asoo: Association;
submitted = false;
  constructor(private http: HttpClient, public api: AssociationService, private router: Router) { }

  ngOnInit(): void {

   this.addAssociation();
  }
addAssociation() {

    this.api.addAssociation(this.asoo).subscribe(res => console.log('Association créée'));
    this.asoo = new Association();
}
onSubmit() {
this.submitted = true;
this.addAssociation();
}
goToList() {
      this.router.navigate(['/association']);
}
}
