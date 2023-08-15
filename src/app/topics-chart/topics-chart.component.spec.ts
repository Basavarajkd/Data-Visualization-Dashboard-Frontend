import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicsChartComponent } from './topics-chart.component';

describe('TopicsChartComponent', () => {
  let component: TopicsChartComponent;
  let fixture: ComponentFixture<TopicsChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopicsChartComponent]
    });
    fixture = TestBed.createComponent(TopicsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
