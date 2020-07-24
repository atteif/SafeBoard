import {Component, Input, OnInit} from '@angular/core';
import {Association} from '../../model/Association';
import {AssociationService} from '../../services/association.service';
import {Reclamation} from '../../model/Reclamation';
import {Router} from '@angular/router';
import {UsersService} from '../../services/users.service';
import {Users} from '../../components/model/Users';

@Component({
  selector: 'app-association-child',
  templateUrl: './association-child.component.html',
  styleUrls: ['./association-child.component.css']
})
export class AssociationChildComponent implements OnInit {
  @Input() association: Association = new Association();
  rec: Reclamation = new Reclamation();
  user: Users = new Users();
  spresp: any;
  constructor(public api: AssociationService, private service: UsersService, private routes: Router) { }

  ngOnInit(): void {

  }
addReclamation(asso: Association) {
this.api.setSelectedAssociation(asso);
console.log(asso);

this.association = this.api.getSelectedAssociation();
this.rec.id_association = this.association.id;
this.api.addReclamation(this.rec, this.association.id).subscribe(resp => {
  return this.spresp.push(resp);
});
this.api.isReclaimed(this.association.id).subscribe();


}


  deleteAssociation(association: Association) {
    this.api.setSelectedAssociation(association);
    console.log(association);

    this.association = this.api.getSelectedAssociation();
    if (this.association.nombre_reclamation == 4) {
      this.api.deleteAssociation(this.association.id).subscribe();
    }
  }
}
