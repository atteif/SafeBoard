import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefugeChildComponent } from './refuge-child.component';

describe('RefugeChildComponent', () => {
  let component: RefugeChildComponent;
  let fixture: ComponentFixture<RefugeChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefugeChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefugeChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
