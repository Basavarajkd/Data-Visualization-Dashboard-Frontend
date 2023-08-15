import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryPieChartComponent } from './country-pie-chart.component';

describe('CountryPieChartComponent', () => {
  let component: CountryPieChartComponent;
  let fixture: ComponentFixture<CountryPieChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountryPieChartComponent]
    });
    fixture = TestBed.createComponent(CountryPieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
