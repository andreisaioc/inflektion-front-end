import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private http: HttpClient) {}


  data: any[] = [];
  isLoading: boolean = true;


  ngOnInit(): void {
    this.fetchData();
  }


  chooseColumnsClick():void{
    alert("choose columns clicked")
  }


  messagePartnersClick():void{
    alert("message partners clicked")
  }


  exportListClick():void{
    alert("export list click clicked")
  }


  fetchData(): void {
    this.http.get<any[]>('https://mockanapi.com/s/67ae1b3403f9ffca6f47eb79/partners?mock_delay=5000')   
      .subscribe({
        next: (response) => {
          console.log(response)
          this.data =  Array.isArray(response) ? response : Object.values(response);
          this.isLoading = false; 
        },
        error: (error) => {
          console.error('Error fetching data:', error);
          this.isLoading = false;  
        }
      });
  }

}
