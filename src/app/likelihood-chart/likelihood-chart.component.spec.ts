import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikelihoodChartComponent } from './likelihood-chart.component';

describe('LikelihoodChartComponent', () => {
  let component: LikelihoodChartComponent;
  let fixture: ComponentFixture<LikelihoodChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LikelihoodChartComponent]
    });
    fixture = TestBed.createComponent(LikelihoodChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
