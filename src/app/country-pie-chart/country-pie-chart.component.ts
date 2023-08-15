import { Component, Input, OnChanges, SimpleChanges, ElementRef } from '@angular/core';
import * as d3 from 'd3';
import { DataDTO } from '../models/data-dto.model';

interface CountryData {
  country: string;
  value: number;
}

@Component({
  selector: 'app-country-pie-chart',
  templateUrl: './country-pie-chart.component.html',
  styleUrls: ['./country-pie-chart.component.css']
})
export class CountryPieChartComponent implements OnChanges {
  @Input() data: DataDTO[] = [];

  constructor(private el: ElementRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'] && changes['data'].currentValue) {
      // Update the country pie chart visualization based on the new data
      this.updateCountryPieChart();
    }
  }

  private updateCountryPieChart(): void {
    // Clear previous chart
    d3.select(this.el.nativeElement).select('svg').remove();

    const width = 400;
    const height = 300;
    const radius = Math.min(width, height) / 2;

    const svg = d3.select(this.el.nativeElement).append('svg')
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${width / 2},${height / 2})`);

    // Generate data for the pie chart
    const countryData: CountryData[] = Array.from(
      d3.rollup(
        this.data,
        v => v.length,
        d => d.country
      ),
      ([country, value]) => ({ country, value })
    );
    const pie = d3.pie<CountryData>().value(d => d.value);
    const data = pie(countryData);

    // Create a color scale
    const color = d3.scaleOrdinal(d3.schemeCategory10);

    // Create and draw the pie slices
    const arc = d3.arc<d3.PieArcDatum<CountryData>>().innerRadius(0).outerRadius(radius);
    const path = svg.selectAll('path')
      .data(data)
      .enter()
      .append('path')
      .attr('d', arc)
      .attr('fill', (d, i) => color(i.toString()))
      .attr('stroke', '#fff')
      .attr('stroke-width', '2px');

    // Add animation to the pie slices
    path.transition()
      .duration(1000)
      .attrTween('d', function(d) {
        const interpolate = d3.interpolate({ startAngle: 0, endAngle: 0 }, d);
        return function(t) {
          return arc(interpolate(t)) || '';
        };
      });
  }
}
