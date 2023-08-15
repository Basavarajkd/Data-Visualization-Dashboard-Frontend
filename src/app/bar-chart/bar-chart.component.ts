import { Component, Input, OnChanges, SimpleChanges, ElementRef } from '@angular/core';
import { DataDTO } from '../models/data-dto.model';
import * as d3 from 'd3';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnChanges {
  @Input() data: DataDTO[] = [];

  constructor(private elementRef: ElementRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'] && changes['data'].currentValue) {
      this.updateBarChart();
    }
  }

  private updateBarChart(): void {
    const chartElement = this.elementRef.nativeElement.querySelector('.chart');

    // Use D3 to create/update your bar chart within chartElement
  }
}
