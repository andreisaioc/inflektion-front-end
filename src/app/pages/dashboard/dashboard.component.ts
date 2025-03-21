import { Component, OnInit, ViewChild } from '@angular/core';
import { TableDataService } from 'src/app/services/table-data/table-data.service'; // Import your service
import { DataTableComponent } from 'src/app/modules/data-table/data-table.component';
import { ColumnConfigService } from 'src/app/services/table-columns/column-config.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  availableColumns = ['ID', 'Name', 'Type', 'Contract', 'Gross Sales', 'Commissions', 'Conversions'];
  selectedColumns: string[] = [...this.availableColumns]; // Default all selected



  constructor(private tableDataService: TableDataService, 
    private columnConfigService: ColumnConfigService) {

      this.columnConfigService.setVisibleColumns(this.selectedColumns);

    } // Inject the service



  updateColumnVisibility() {
    this.columnConfigService.setVisibleColumns(this.selectedColumns);
  }


  toggleColumn(column: string) {
    if (this.selectedColumns.includes(column)) {
      this.selectedColumns = this.selectedColumns.filter(c => c !== column);
    } else {
      this.selectedColumns.push(column);
    }
  }

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
