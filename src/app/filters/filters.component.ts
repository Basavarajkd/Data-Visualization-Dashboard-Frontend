import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filters',
  template: `
    <div class="filters">
      <input
        type="text"
        placeholder="Search..."
        (input)="onSearchChange($event)"
      >
    </div>
  `,
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent {
  @Output() searchFilter = new EventEmitter<string>();

  onSearchChange(event: any): void {
    const searchTerm: string = event.target.value;
    this.searchFilter.emit(searchTerm);
  }
}
