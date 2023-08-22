import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { DataDTO } from '../models/data-dto.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  dataTableData: DataDTO[] = []; // Declare and initialize dataTableData
  intensityChartData: any[] = []; // Declare and initialize intensityChartData

  filteredData: DataDTO[] = []; // Initialize with all data

  searchTerm: string = ''; // Declare searchTerm property

  constructor(private dataService: DataService) {
    // ...
  }

  ngOnInit(): void {
    this.loadData(); // Load intensity chart data

    this.dataService.getAllData().subscribe(
      (response) => {
        this.dataTableData = response; // Assign response to dataTableData
        this.filteredData = response; // Initialize filteredData with all data
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  private loadData(): void {
    this.dataService.getIntensityChartData().subscribe(
      (data) => {
        this.intensityChartData = data; // Assign intensity chart data
      },
      (error) => {
        console.error('Error fetching intensity chart data:', error);
      }
    );
  }

  updateFilteredData(searchTerm: string): void {
    if (!searchTerm) {
      this.filteredData = this.dataTableData;
      return;
    }

    searchTerm = searchTerm.toLowerCase();

    this.filteredData = this.dataTableData.filter((data) =>
      data.title.toLowerCase().includes(searchTerm) ||
      data.topic.toLowerCase().includes(searchTerm) ||
      data.sector.toLowerCase().includes(searchTerm) ||
      data.insight.toLowerCase().includes(searchTerm) ||
      data.swot.toLowerCase().includes(searchTerm) ||
      data.url.toLowerCase().includes(searchTerm) ||
      data.region.toLowerCase().includes(searchTerm) ||
      data.city.toLowerCase().includes(searchTerm) ||
      data.country.toLowerCase().includes(searchTerm) ||
      data.pestle.toLowerCase().includes(searchTerm) ||
      data.source.toLowerCase().includes(searchTerm)
    );
  }
}
