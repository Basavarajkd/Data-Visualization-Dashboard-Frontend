import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataDTO } from './models/data-dto.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  

  constructor(private http: HttpClient) { }
  
  getAllData(): Observable<DataDTO[]> {
    return this.http.get<DataDTO[]>('http://localhost:8080/api/data');
  }

  getIntensityChartData(): Observable<any[]> {
    const url = 'http://localhost:8080/api/intensity-chart-data'; // Replace with the actual endpoint to fetch intensity chart data
    return this.http.get<any[]>(url);
  }
}

