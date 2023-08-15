// topics-bar-chart.component.ts
import { Component, Input, OnChanges, SimpleChanges, ElementRef } from '@angular/core';
import * as d3 from 'd3';
import { DataDTO } from '../models/data-dto.model';

interface TopicData {
  topic: string;
  value: number;
}

@Component({
  selector: 'app-topics-bar-chart',
  templateUrl: './topics-bar-chart.component.html',
  styleUrls: ['./topics-bar-chart.component.css']
})
export class TopicsBarChartComponent implements OnChanges {
  @Input() data: DataDTO[] = [];

  constructor(private el: ElementRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'] && changes['data'].currentValue) {
      // Update the topics bar chart visualization based on the new data
      this.updateTopicsBarChart();
    }
  }

  private updateTopicsBarChart(): void {
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

    // Generate data for the bar chart
    const topicData = Array.from(
      d3.rollup(
        this.data,
        v => v.length,
        d => d.topic
      ),
      ([topic, value]) => ({ topic, value })
    );

    // Create scales
    const xScale = d3.scaleBand()
      .domain(topicData.map(d => d.topic))
      .range([0, width])
      .padding(0.1);
    const yScale = d3.scaleLinear()
      .domain([0, d3.max(topicData, d => d.value) || 0])
      .range([height, 0]);

    // Create and draw bars
    svg.selectAll('rect')
      .data(topicData)
      .enter()
      .append('rect')
      .attr('x', d => xScale(d.topic) || 0)
      .attr('y', d => yScale(d.value) || 0)
      .attr('width', xScale.bandwidth())
      .attr('height', d => height - (yScale(d.value) || 0))
      .attr('fill', 'steelblue');
    
    // Add x-axis
    svg.append('g')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(xScale))
      .selectAll('text')
      .attr('y', 0)
      .attr('x', 9)
      .attr('dy', '.35em')
      .attr('transform', 'rotate(45)')
      .style('text-anchor', 'start');
    
    // Add y-axis
    svg.append('g')
      .call(d3.axisLeft(yScale));
  }
}
