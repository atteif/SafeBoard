import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeedsChartComponent } from './needs-chart.component';

describe('NeedsChartComponent', () => {
  let component: NeedsChartComponent;
  let fixture: ComponentFixture<NeedsChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeedsChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeedsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
