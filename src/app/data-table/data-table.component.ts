import { Component, Input } from '@angular/core';
import { DataDTO } from '../models/data-dto.model';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent {
  @Input() data: DataDTO[] = [];
  @Input() countryPieChartData: any; // Define an input property for country pie chart data


  
}
