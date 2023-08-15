import { Component, Input, OnChanges, SimpleChanges, ElementRef } from '@angular/core';
import * as d3 from 'd3';
import { DataDTO } from '../models/data-dto.model';

interface RegionData {
  region: string;
  value: number;
}

@Component({
  selector: 'app-region-line-chart',
  templateUrl: './region-line-chart.component.html',
  styleUrls: ['./region-line-chart.component.css']
})
export class RegionLineChartComponent implements OnChanges {
  @Input() data: DataDTO[] = [];

  constructor(private el: ElementRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'] && changes['data'].currentValue) {
      // Update the region line chart visualization based on the new data
      this.updateRegionLineChart();
    }
  }

  private updateRegionLineChart(): void {
    // Clear previous chart
    d3.select(this.el.nativeElement).select('svg').remove();

    const margin = { top: 20, right: 20, bottom: 40, left: 40 };
    const width = 400 - margin.left - margin.right;
    const height = 300 - margin.top - margin.bottom;

    const svg = d3.select(this.el.nativeElement).append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    // Generate data for the line chart
    const regionData = d3.rollup(
      this.data,
      v => v.length,
      d => d.region
    );
    const data = Array.from(regionData, ([region, value]) => ({ region, value }));

    // Create scales
    const xScale = d3.scaleBand()
      .domain(data.map(d => d.region))
      .range([0, width])
      .padding(0.1);
    const yScale = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.value) || 0])
      .range([height, 0]);

    // Create and draw line
    const line = d3.line<RegionData>()
      .x(d => xScale(d.region) || 0)
      .y(d => yScale(d.value) || 0);

    svg.append('path')
      .datum(data)
      .attr('fill', 'none')
      .attr('stroke', 'steelblue')
      .attr('stroke-width', 2)
      .attr('d', line);

    // Add x-axis
    svg.append('g')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(xScale));

    // Add y-axis
    svg.append('g')
      .call(d3.axisLeft(yScale));
  }
}
