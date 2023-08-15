import { Component, Input, ViewChild, ElementRef, OnChanges } from '@angular/core';
import * as d3 from 'd3';
import { DataDTO } from '../models/data-dto.model';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnChanges {
  @Input() data: DataDTO[] = [];

  @ViewChild('chart') chartContainer!: ElementRef;

  constructor() {}

  ngOnChanges(): void {
    if (this.data.length > 0) {
      this.createBarChart();
    }
  }

  createBarChart(): void {
    const svg = d3.select(this.chartContainer.nativeElement);
    // Rest of your chart creation logic here
  }
}
