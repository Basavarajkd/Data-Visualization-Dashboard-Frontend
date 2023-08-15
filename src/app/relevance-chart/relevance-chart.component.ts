import { Component, Input, OnChanges, SimpleChanges, ElementRef } from '@angular/core';
import * as d3 from 'd3';
import { DataDTO } from '../models/data-dto.model';

@Component({
  selector: 'app-relevance-chart',
  templateUrl: './relevance-chart.component.html',
  styleUrls: ['./relevance-chart.component.css']
})
export class RelevanceChartComponent implements OnChanges {
  @Input() data: DataDTO[] = [];

  constructor(private el: ElementRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'] && changes['data'].currentValue) {
      // Update the relevance chart visualization based on the new data
      this.updateRelevanceChart();
    }
  }

  private updateRelevanceChart(): void {
    // Clear previous chart
    d3.select(this.el.nativeElement).select('svg').remove();

    const svg = d3.select(this.el.nativeElement).append('svg')
      .attr('width', 400)
      .attr('height', 300);

    const dataWithDefaults: DataDTO[] = this.data.map(d => ({
      ...d,
      relevance: d.relevance !== undefined ? +d.relevance : 0
    }));

    // Create a bar chart
    const margin = { top: 20, right: 20, bottom: 30, left: 40 };
    const width = +svg.attr('width') - margin.left - margin.right;
    const height = +svg.attr('height') - margin.top - margin.bottom;

    const g = svg.append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    const x = d3.scaleBand()
      .rangeRound([0, width])
      .padding(0.1)
      .domain(dataWithDefaults.map(d => d.title));

    const y = d3.scaleLinear()
      .rangeRound([height, 0])
      .domain([0, d3.max(dataWithDefaults, d => +d.relevance || 0) as number]);

    g.append('g')
      .attr('class', 'axis axis-x')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(x));

    g.append('g')
      .attr('class', 'axis axis-y')
      .call(d3.axisLeft(y).ticks(10, '%'));

    // Bind data to rectangles
    g.selectAll('.bar')
      .data(dataWithDefaults)
      .enter().append('rect')
      .attr('class', 'bar')
      .attr('x', d => x(d.title) || 0)
      .attr('y', d => y(+d.relevance || 0))
      .attr('width', x.bandwidth())
      .attr('height', d => height - y(+d.relevance || 0));
  }
}
