import { Component, OnInit, OnChanges, ViewChild, ElementRef, Input, ViewEncapsulation } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-topic-chart',
  templateUrl: './topic-chart.component.html',
  styleUrls: ['./topic-chart.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TopicChartComponent implements OnInit, OnChanges {
  @ViewChild('chart') private chartContainer!: ElementRef; // Note the '!' operator
  @Input()
  data!: Array<any>;
  private margin: any = { top: 20, bottom: 20, left: 40, right: 20 }; // Adjusted margin for labels
  private chart: any;
  private width: number=0;
  private height: number=0;
  private xScale: any;
  private yScale: any;
  private colors: any;
  private xAxis: any;
  private yAxis: any;

  constructor() { }

  ngOnInit() {
    this.createChart();
    if (this.data) {
      this.updateChart();
    }
  }

  ngOnChanges() {
    if (this.chart) {
      this.updateChart();
    }
  }

  createChart() {
    let element = this.chartContainer.nativeElement;
    this.width = element.offsetWidth - this.margin.left - this.margin.right;
    this.height = element.offsetHeight - this.margin.top - this.margin.bottom;
    let svg = d3.select(element).append('svg')
      .attr('width', element.offsetWidth)
      .attr('height', element.offsetHeight);

    // chart plot area
    this.chart = svg.append('g')
      .attr('class', 'bars')
      .attr('transform', `translate(${this.margin.left}, ${this.margin.top})`);

    // define X & Y domains
    let xDomain = this.data.map(d => d.name);
    let yDomain = [0, d3.max(this.data, d => d.topicA + d.topicB + d.topicC + d.topicD)];

    // create scales
    this.xScale = d3.scaleBand().padding(0.1).domain(xDomain).rangeRound([0, this.width]);
    this.yScale = d3.scaleLinear().domain(yDomain).range([this.height, 0]);

    // bar colors
    this.colors = d3.scaleOrdinal().domain(['topicA', 'topicB', 'topicC', 'topicD'])
      .range(d3.schemeCategory10);

    // x & y axis
    this.xAxis = svg.append('g')
      .attr('class', 'axis axis-x')
      .attr('transform', `translate(${this.margin.left}, ${this.margin.top + this.height})`)
      .call(d3.axisBottom(this.xScale));
    this.yAxis = svg.append('g')
      .attr('class', 'axis axis-y')
      .attr('transform', `translate(${this.margin.left}, ${this.margin.top})`)
      .call(d3.axisLeft(this.yScale).ticks(10, '%'));
  }

  updateChart() {
    // update scales & axis
    this.xScale.domain(this.data.map(d => d.name));
    this.yScale.domain([0, d3.max(this.data, d => d.topicA + d.topicB + d.topicC + d.topicD)]);
    this.colors.domain(['topicA', 'topicB', 'topicC', 'topicD']);
    this.xAxis.transition().call(d3.axisBottom(this.xScale));
    this.yAxis.transition().call(d3.axisLeft(this.yScale).ticks(10, '%'));

    let series = this.chart.selectAll('.series')
      .data(this.data);

    series.exit().remove();

    let update = series.selectAll('.bar')
      .data((d: any) => [d.topicA, d.topicB, d.topicC, d.topicD]);

    update.exit().remove();

    update.transition()
      .attr('y', (d: any) => this.yScale(d[1]))
      .attr('height', (d: any) => this.yScale(d[0]) - this.yScale(d[1]))
      .style('fill', (d: any, i: number) => this.colors(i))
      .attr('x', (d: any) => this.xScale(d.data.name))
      .attr('y', (d: any) => this.yScale(d[1]))
      .attr('height', (d: any) => this.yScale(d[0]) - this.yScale(d[1]))
      .transition()
      .delay((d: any, i: number) => i * 10)
      .attr('y', (d: any) => this.yScale(d[1]))
      .attr('height', (d: any) => this.yScale(d[0]) - this.yScale(d[1]));

    // ... (rest of the function)
  }
}
