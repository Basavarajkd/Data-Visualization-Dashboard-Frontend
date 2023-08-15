import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionLineChartComponent } from './region-line-chart.component';

describe('RegionLineChartComponent', () => {
  let component: RegionLineChartComponent;
  let fixture: ComponentFixture<RegionLineChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegionLineChartComponent]
    });
    fixture = TestBed.createComponent(RegionLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
