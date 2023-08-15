import { Component } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SidenavComponent {
  isOpen: boolean = false;

  openNav(): void {
    this.isOpen = true;
  }

  closeNav(): void {
    this.isOpen = false;
  }
}
