import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnChanges {
  @Input() data: any[] = [];
  @Input() isLoading: boolean = false;

  dataToDisplay: any[] = [];
  currentPage: number = 1;
  entriesPerPage: number = 14;  
  totalPages: number = 0;

  sortOrder: 'asc' | 'desc' = 'asc';  // Default sort order
  sortColumn: string = 'partnerName'; // Default sort column

  ngOnChanges(changes: SimpleChanges) {
    if (changes['data'] && this.data) {
      this.totalPages = Math.ceil(this.data.length / this.entriesPerPage);
      this.updateDisplayedData();
    }
  }

  updateDisplayedData(): void {
    const sortedData = [...this.data].sort((a, b) => {
        const valueA = isNaN(Number(a[this.sortColumn])) 
            ? a[this.sortColumn] 
            : Number(a[this.sortColumn]);

        const valueB = isNaN(Number(b[this.sortColumn])) 
            ? b[this.sortColumn] 
            : Number(b[this.sortColumn]);

        // Handle string and number sorting
        if (typeof valueA === 'string' && typeof valueB === 'string') {
            return this.sortOrder === 'asc'
                ? valueA.localeCompare(valueB)
                : valueB.localeCompare(valueA);
        } else {
            return this.sortOrder === 'asc' 
                ? valueA - valueB 
                : valueB - valueA;
        }
    });

    const startIndex = (this.currentPage - 1) * this.entriesPerPage;
    const endIndex = startIndex + this.entriesPerPage;
    this.dataToDisplay = sortedData.slice(startIndex, endIndex);
}


  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.updateDisplayedData();
    }
  }

  toggleSortOrder(column: string): void {
    if (this.sortColumn === column) {
      // Toggle order if sorting the same column
      this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    } else {
      // Reset to ascending when sorting a new column
      this.sortOrder = 'asc';
      this.sortColumn = column;
    }
    this.updateDisplayedData();
  }

  detailsFetch(itemId: number): void {
    alert("Fetching details: " + itemId);
  }

  getShowingRange(): string {
    const start = (this.currentPage - 1) * this.entriesPerPage + 1;
    const end = Math.min(this.currentPage * this.entriesPerPage, this.data.length);
    return `${start}-${end}`;
  }
}
