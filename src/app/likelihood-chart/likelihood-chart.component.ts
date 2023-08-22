import { Component, Input, OnChanges, SimpleChanges, ElementRef } from '@angular/core';
import * as d3 from 'd3';
import { DataDTO } from '../models/data-dto.model';

@Component({
  selector: 'app-likelihood-chart',
  templateUrl: './likelihood-chart.component.html',
  styleUrls: ['./likelihood-chart.component.css']
})
export class LikelihoodChartComponent implements OnChanges {
  @Input() data: DataDTO[] = [];

  constructor(private el: ElementRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'] && changes['data'].currentValue) {
      // Update the likelihood chart visualization based on the new data
      this.updateLikelihoodChart();
    }
  }

  private updateLikelihoodChart(): void {
    // Clear previous chart
    d3.select(this.el.nativeElement).select('svg').remove();
    
    const margin = { top: 20, right: 20, bottom: 30, left: 40 };
    const width = 400 - margin.left - margin.right;
    const height = 300 - margin.top - margin.bottom;
    
    const svg = d3.select(this.el.nativeElement).append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);
    
    const x = d3.scaleBand()
      .range([0, width])
      .padding(0.1);
    
    const y = d3.scaleLinear()
      .range([height, 0]);
    
    // Filter out undefined values from the data
    const filteredData = this.data.filter(d => typeof d.likelihood === 'number' && !isNaN(d.likelihood));
    
    x.domain(filteredData.map(d => d.title));
    y.domain([0, d3.max(filteredData, d => d.likelihood as number) as number]);

    
    svg.selectAll('.bar')
      .data(filteredData)
      .enter().append('rect')
      .attr('class', 'bar')
      .attr('x', d => x(d.title) as number) // Explicitly cast x value to number
      .attr('width', x.bandwidth())
      .attr('y', d => y(d.likelihood as number) as number) // Explicitly cast y value to number
      .attr('height', d => height - y(d.likelihood as number) as number); // Explicitly cast height value to number
  }
} 