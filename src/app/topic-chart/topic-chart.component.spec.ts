import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicChartComponent } from './topic-chart.component';

describe('TopicChartComponent', () => {
  let component: TopicChartComponent;
  let fixture: ComponentFixture<TopicChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopicChartComponent]
    });
    fixture = TestBed.createComponent(TopicChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
