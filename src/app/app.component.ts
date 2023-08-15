import { Component, ViewChild } from '@angular/core';
import { DataDTO } from './models/data-dto.model';
import { DashboardComponent } from './dashboard/dashboard.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isSideNavOpen: boolean = false;
  showFilterDetails: boolean = false;
  title: any;

  toggleSideNav(): void {
    this.isSideNavOpen = !this.isSideNavOpen;
  }

  loadFilterDetails(): void {
    this.showFilterDetails = true;
  }
  toggleDashboardSubMenu(): void {
    // Implement your logic here
  }
}
