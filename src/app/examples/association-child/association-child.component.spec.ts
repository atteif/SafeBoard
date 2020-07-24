import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociationChildComponent } from './association-child.component';

describe('AssociationChildComponent', () => {
  let component: AssociationChildComponent;
  let fixture: ComponentFixture<AssociationChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssociationChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociationChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
