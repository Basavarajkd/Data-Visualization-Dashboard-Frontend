import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { DataDTO } from '../models/data-dto.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  intensityChartData: any[] = [];


  topicChartData: any[] = [
    { name: 'Topic 1', topicA: 25, topicB: 30, topicC: 15, topicD: 10 },
    { name: 'Topic 2', topicA: 10, topicB: 20, topicC: 5, topicD: 15 },
    { name: 'Topic 3', topicA: 15, topicB: 5, topicC: 25, topicD: 20 },
    { name: 'Topic 4', topicA: 30, topicB: 10, topicC: 10, topicD: 5 },
    // Add more data items as needed
  ];
  dataTableData: DataDTO[] = [];
  countryPieChartData: any; // Define this property and assign data to it

  filteredData: DataDTO[] = []; // Initialize with all data

  constructor(private dataService: DataService) {

    
  }


  ngOnInit(): void {
    this.loadData(); // Load intensity chart data

    this.dataService.getAllData().subscribe(
      (response) => {
        this.dataTableData = response;
        this.filteredData = response; // Initialize filteredData with all data
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }
  private loadData(): void {
    this.dataService.getIntensityChartData().subscribe((data) => {
        this.intensityChartData = data; // Assuming data is an array of objects with 'title' and 'intensity' properties
      },
      (error) => {
        console.error("Error fetching intensity chart data:", error);
      }
    );
  }
  

  updateFilteredData(filteredData: DataDTO[]): void {
    this.filteredData = filteredData;
  }
}
