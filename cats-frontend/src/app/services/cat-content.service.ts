import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs';

interface CatContent {
  id: number;
  url: string;
  type: string;
}

@Injectable({
  providedIn: 'root'  
})
export class CatContentService {
  private apiUrl = 'https://090e-149-19-166-203.ngrok-free.app/cats';  

  constructor(private http: HttpClient) {}

  getCatContent(): Observable<CatContent[]> {
    const headers = new HttpHeaders({
      'ngrok-skip-browser-warning': '69420'
    })
    return this.http.get<CatContent[]>(this.apiUrl, { headers });
  }
}
