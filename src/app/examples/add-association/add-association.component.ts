import { Component, OnInit } from '@angular/core';
import {Association} from '../../model/Association';
import {HttpClient} from '@angular/common/http';
import {AssociationService} from '../../services/association.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UsersService} from '../../services/users.service';

@Component({
  selector: 'app-add-association',
  templateUrl: './add-association.component.html',
  styleUrls: ['./add-association.component.css']
})
export class AddAssociationComponent implements OnInit {
    headers;
asoo: Association = new Association();
spresp: any;

submitted = false;
assoForm = new FormGroup({
    'nom_a' : new FormControl('', Validators.required),
    'tel' : new FormControl('', Validators.required),
    'email' : new FormControl('', Validators.required),
    'description' : new FormControl('', Validators.required),
    'ville' : new FormControl('', Validators.required),
    'adresse' : new FormControl('', Validators.required),
    'nom_president' : new FormControl('', Validators.required),
    'budget' : new FormControl('', Validators.required),
    'categorie' : new FormControl('', Validators.required)
});

  constructor(public api: AssociationService,  private router: Router) { }
  ngOnInit(): void {

  }
addAssociation() {
    this.api.addAssociation(this.asoo).subscribe();
    console.log(this.asoo);
    this.goToList();
}
onSubmit() {
this.submitted = true;
this.addAssociation();
}
goToList() {

      this.router.navigateByUrl('/association').then();
}
}
