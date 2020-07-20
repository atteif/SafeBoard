import { Component, OnInit } from '@angular/core';
import {AssociationService} from '../../services/association.service';

@Component({
  selector: 'app-association',
  templateUrl: './association.component.html',
  styleUrls: ['./association.component.css']
})
export class AssociationComponent implements OnInit {
  searchText = ''
  formControls = this.associationservice.Associationform.controls;
  submitted = false ;
  Association: any;
  constructor(public associationservice: AssociationService) { }

  ngOnInit(): void {
  }
  onSubmit() {
    this.submitted = true;
    if (this.associationservice.Associationform.valid) {
      if (this.associationservice.Associationform.get('id').value == null) {
         this.associationservice.addAssociation(this.associationservice.Associationform.value);
        setTimeout(function() {
          this.refreshdata();
        }, 200)
        this.submitted = false;
        this.associationservice.Associationform.reset();
        this.associationservice.Associationform.setValue({
          id: null,
          nomA: '',
        tel: '',
        email: '',
        description: '',
        ville: '',
        adresse: '',
        nomPresident: '',
        budget: null,
        });
        this.refreshdata();
      } else {
        this.associationservice.updateAssociation(this.associationservice.Associationform.value);
        this.submitted = false;
        this.associationservice.Associationform.reset();
        this.associationservice.Associationform.setValue({
          id: null,
          nomA: '',
          tel: '',
          email: '',
          description: '',
          ville: '',
          adresse: '',
          nomPresident: '',
          budget: null,
        });
        this.refreshdata();
      }
    }

  }
  deleteAssociation(id) {
    this.associationservice.deleteAssociation(id)
    setTimeout(() => {
      this.refreshdata();
    }, 200);

  };
  refreshdata() {
    this.associationservice.getAssociation().subscribe((data: { }) => {
      this.Association = data
    })
  }
}
