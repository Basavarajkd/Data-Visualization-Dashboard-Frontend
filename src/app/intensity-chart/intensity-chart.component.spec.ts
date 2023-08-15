import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntensityChartComponent } from './intensity-chart.component';

describe('IntensityChartComponent', () => {
  let component: IntensityChartComponent;
  let fixture: ComponentFixture<IntensityChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IntensityChartComponent]
    });
    fixture = TestBed.createComponent(IntensityChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
