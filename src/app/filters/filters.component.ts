import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DataDTO } from '../models/data-dto.model';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent {
  @Input() data: DataDTO[] = [];
  @Output() filteredData = new EventEmitter<DataDTO[]>();

  selectedEndYear?: number;
  selectedTopic?: string;
  selectedSector?: string;
  selectedRegion?: string;
  selectedPEST?: string;
  selectedSource?: string;
  selectedSwot?: string;
  selectedCountry?: string;
  selectedCity?: string;

  applyFilters(): void {
    let filteredData: DataDTO[] = this.data;

    if (this.selectedEndYear) {
      filteredData = filteredData.filter(
        (item) => item.endyear === this.selectedEndYear
      );
    }
    if (this.selectedTopic) {
      filteredData = filteredData.filter(
        (item) => item.topic === this.selectedTopic
      );
    }
    if (this.selectedSector) {
      filteredData = filteredData.filter(
        (item) => item.sector === this.selectedSector
      );
    }
    if (this.selectedRegion) {
      filteredData = filteredData.filter(
        (item) => item.region === this.selectedRegion
      );
    }
    if (this.selectedPEST) {
      filteredData = filteredData.filter(
        (item) => item.pestle === this.selectedPEST
      );
    }
    if (this.selectedSource) {
      filteredData = filteredData.filter(
        (item) => item.source === this.selectedSource
      );
    }
    if (this.selectedSwot) {
      filteredData = filteredData.filter(
        (item) => item.swot === this.selectedSwot
      );
    }
    if (this.selectedCountry) {
      filteredData = filteredData.filter(
        (item) => item.country === this.selectedCountry
      );
    }
    if (this.selectedCity) {
      filteredData = filteredData.filter(
        (item) => item.city === this.selectedCity
      );
    }
    this.filteredData.emit(filteredData);
  }
  onFilterMouseEnter() {
    // Add logic for filter hover enter if needed
  }

  onFilterMouseLeave() {
    // Add logic for filter hover leave if needed
  }
}
