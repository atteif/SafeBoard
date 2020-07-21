import {Component, Input, OnInit} from '@angular/core';
import {Association} from '../../Entity/Association';

@Component({
  selector: 'app-association-child',
  templateUrl: './association-child.component.html',
  styleUrls: ['./association-child.component.css']
})
export class AssociationChildComponent implements OnInit {
  @Input() association: Association;
  constructor() { }

  ngOnInit(): void {
  }

}
