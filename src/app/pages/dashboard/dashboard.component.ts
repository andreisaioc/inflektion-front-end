import { Component, OnInit, ViewChild } from '@angular/core';
import { TableDataService } from 'src/app/services/table-data/table-data.service'; // Import your service
import { DataTableComponent } from 'src/app/modules/data-table/data-table.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private tableDataService: TableDataService) {} // Inject the service

  data: any[] = [];
  isLoading: boolean = true;
  isError: boolean = false;

  @ViewChild(DataTableComponent) dataTable!: DataTableComponent;

  ngOnInit(): void {
    this.fetchData();
  }

  chooseColumnsClick(): void {
    alert("choose columns clicked");
  }

  messagePartnersClick(): void {
    alert("message partners clicked");
  }

  exportListClick(): void {
    if (this.dataTable) {
      this.dataTable.exportToCSV();
    }
  }

  fetchData(): void {
    this.tableDataService.getPartners().subscribe({
      next: (response) => {
        console.log(response);
        this.data = Array.isArray(response) ? response : Object.values(response);
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error fetching data:', error);
        this.isLoading = false;
        this.isError = true;
      }
    });
  }
}
