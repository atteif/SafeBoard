import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersChildComponent } from './users-child.component';

describe('UsersChildComponent', () => {
  let component: UsersChildComponent;
  let fixture: ComponentFixture<UsersChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
