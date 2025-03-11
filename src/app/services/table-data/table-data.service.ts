import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TableDataService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getPartners(): Observable<any> {
    return this.http.get(this.apiUrl).pipe(
      catchError(error => {
        return throwError(() => new Error('Failed to fetch partners. Please try again later.'));
      })
    );
  }
}
