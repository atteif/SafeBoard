import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarBenChartComponent } from './bar-ben-chart.component';

describe('BarBenChartComponent', () => {
  let component: BarBenChartComponent;
  let fixture: ComponentFixture<BarBenChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarBenChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarBenChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
