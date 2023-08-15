import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelevanceChartComponent } from './relevance-chart.component';

describe('RelevanceChartComponent', () => {
  let component: RelevanceChartComponent;
  let fixture: ComponentFixture<RelevanceChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RelevanceChartComponent]
    });
    fixture = TestBed.createComponent(RelevanceChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
