import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  private http: HttpClient = inject(HttpClient);

  constructor() {
    this.http.get(`http://localhost:3000/tickets`).subscribe(
      tickets => console.log(tickets),
    );
  }
}
