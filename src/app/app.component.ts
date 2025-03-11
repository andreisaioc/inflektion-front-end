import { Component, ViewChild } from '@angular/core';
import { SidebarComponent } from './components/sidebar/sidebar.component'; // Import the Sidebar component

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(SidebarComponent) sidebar!: SidebarComponent;

  toggleSidebar() {
    this.sidebar.toggleSidebar();
  }
}
