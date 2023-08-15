// import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
// import * as d3 from 'd3';
// import { DataDTO } from '../models/data-dto.model';

// @Component({
//   selector: 'app-intensity-chart',
//   templateUrl: './intensity-chart.component.html',
//   styleUrls: ['./intensity-chart.component.css']
// })
// export class IntensityChartComponent implements OnInit, OnChanges {
//   @Input() data: DataDTO[] = [];

//   @ViewChild('intensityChart', { static: true }) private chartContainer!: ElementRef;
//   private margin = { top: 20, right: 20, bottom: 30, left: 40 };
//   private width!: number;
//   private height!: number;
//   private x!: any;
//   private y!: any;
//   private svg!: any;

//   constructor() {}

//   ngOnInit(): void {
//     this.createChart();
//   }

//   ngOnChanges(changes: SimpleChanges): void {
//     if (changes['data']) {
//       this.updateChart();
//     }
//   }

//   private createChart(): void {
//     this.width = this.chartContainer.nativeElement.offsetWidth - this.margin.left - this.margin.right;
//     this.height = 300 - this.margin.top - this.margin.bottom; // Adjust height as needed

//     this.svg = d3
//       .select(this.chartContainer.nativeElement)
//       .append('svg')
//       .attr('width', this.width + this.margin.left + this.margin.right)
//       .attr('height', this.height + this.margin.top + this.margin.bottom)
//       .append('g')
//       .attr('transform', `translate(${this.margin.left},${this.margin.top})`);

//     this.x = d3
//       .scaleBand()
//       .rangeRound([0, this.width])
//       .padding(0.1);

//     this.y = d3.scaleLinear().rangeRound([this.height, 0]);

//     this.updateChart();
//   }

//   private updateChart(): void {
//     if (!this.data || this.data.length === 0) {
//       return;
//     }

//     this.x.domain(this.data.map((d: DataDTO) => d.title));
//     this.y.domain([0, d3.max(this.data, (d: DataDTO) => d.intensity)]);

//     this.svg.selectAll('*').remove();

//     this.svg
//       .selectAll('.bar')
//       .data(this.data)
//       .enter()
//       .append('rect')
//       .attr('class', 'bar')
//       .attr('x', (d: DataDTO) => this.x(d.title))
//       .attr('y', (d: DataDTO) => this.y(d.intensity))
//       .attr('width', this.x.bandwidth())
//       .attr('height', (d: DataDTO) => this.height - this.y(d.intensity));
//   }
// }


import { Component, Input, ElementRef, OnInit, OnChanges, SimpleChanges, ViewChild,AfterViewInit} from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-intensity-chart',
  template: '<div #intensityChart></div>',
  styleUrls: ['./intensity-chart.component.css']
})
export class IntensityChartComponent implements OnInit, OnChanges, AfterViewInit {
  @Input() data: any[] = [];

  @ViewChild('intensityChart', { static: true }) private chartContainer!: ElementRef;
  private margin = { top: 20, right: 20, bottom: 30, left: 40 };
  private width!: number;
  private height!: number;
  private x!: any;
  private y!: any;
  private svg!: any;
  loadData: any;

  constructor() {}
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    this.updateChart();
    this.createChart();
    this.loadData();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data']) {
      this.updateChart();
    }
  }

  private createChart(): void {
    this.width = this.chartContainer.nativeElement.offsetWidth - this.margin.left - this.margin.right;
    this.height = 300 - this.margin.top - this.margin.bottom; // Adjust height as needed

    this.svg = d3
      .select(this.chartContainer.nativeElement)
      .append('svg')
      .attr('width', this.width + this.margin.left + this.margin.right)
      .attr('height', this.height + this.margin.top + this.margin.bottom)
      .append('g')
      .attr('transform', `translate(${this.margin.left},${this.margin.top})`);

    this.x = d3.scaleBand().rangeRound([0, this.width]).padding(0.1);
    this.y = d3.scaleLinear().rangeRound([this.height, 0]);

    this.updateChart();
  }

  private updateChart(): void {
    if (!this.data || this.data.length === 0) {
      return;
    }
  
    this.x.domain(this.data.map((d: any) => d.title));
    this.y.domain([0, d3.max(this.data, (d: any) => d.intensity)]);
  
    this.svg.selectAll('*').remove();
  
    this.svg
      .selectAll('.bar')
      .data(this.data)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', (d: any) => this.x(d.title))
      .attr('y', (d: any) => this.y(d.intensity))
      .attr('width', this.x.bandwidth())
      .attr('height', (d: any) => this.height - this.y(d.intensity));
  }
}

