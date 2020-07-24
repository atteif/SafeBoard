import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRefugeeComponent } from './new-refugee.component';

describe('NewRefugeeComponent', () => {
  let component: NewRefugeeComponent;
  let fixture: ComponentFixture<NewRefugeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewRefugeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewRefugeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
