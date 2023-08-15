import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicsBarChartComponent } from './topics-bar-chart.component';

describe('TopicsBarChartComponent', () => {
  let component: TopicsBarChartComponent;
  let fixture: ComponentFixture<TopicsBarChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopicsBarChartComponent]
    });
    fixture = TestBed.createComponent(TopicsBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
