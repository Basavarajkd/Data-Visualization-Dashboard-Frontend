import { Component, Input, OnChanges, SimpleChanges, ElementRef } from '@angular/core';
import * as d3 from 'd3';
import { DataDTO } from '../models/data-dto.model';

interface TopicData {
  topic: string;
  count: number;
}

@Component({
  selector: 'app-topic-chart',
  templateUrl: './topic-chart.component.html',
  styleUrls: ['./topic-chart.component.css']
})
export class TopicChartComponent implements OnChanges {
  @Input() data: DataDTO[] = [];

  constructor(private el: ElementRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'] && changes['data'].currentValue) {
      this.updateTopicChart();
    }
  }

  private updateTopicChart(): void {
    // Clear previous chart
    d3.select(this.el.nativeElement).select('svg').remove();

    const width = 400;
    const height = 300;
    const margin = { top: 20, right: 20, bottom: 40, left: 40 };
    const svg = d3.select(this.el.nativeElement).append('svg')
      .attr('width', width)
      .attr('height', height);

    const chartWidth = width - margin.left - margin.right;
    const chartHeight = height - margin.top - margin.bottom;

    const topicData: TopicData[] = Array.from(
      d3.rollup(
        this.data.filter(d => d.topic !== undefined && d.topic !== null),
        v => v.length,
        d => d.topic!
      ),
      ([topic, count]) => ({ topic, count })
    );

    const validCounts = topicData.map(d => d.count).filter(count => count !== undefined) as number[];
    const maxCount = d3.max(validCounts) || 0;

    const x = d3.scaleBand()
      .domain(topicData.map(d => d.topic))
      .range([0, chartWidth])
      .padding(0.1);

    const y = d3.scaleLinear()
      .domain([0, maxCount])
      .nice()
      .range([chartHeight, 0]);

    const g = svg.append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

      g.selectAll('.bar')
      .data(topicData)
      .enter().append('rect')
        .attr('class', 'bar')
        .attr('x', d => x(d.topic)! + '') // Convert x position to string explicitly
        .attr('y', d => y(d.count))
        .attr('width', x.bandwidth())
        .attr('height', d => chartHeight - y(d.count));
  
    g.append('g')
      .attr('class', 'x-axis')
      .attr('transform', `translate(0,${chartHeight})`)
      .call(d3.axisBottom(x));
    
    g.append('g')
      .attr('class', 'y-axis')
      .call(d3.axisLeft(y));
  }
}
