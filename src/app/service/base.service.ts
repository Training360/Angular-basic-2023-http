import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BaseService<T> {

  private http: HttpClient = inject(HttpClient);

  private apiUrl: string = environment.apiUrl;

  constructor(
    @Inject(String) protected entity: string,
  ) {
    // this.http.get(`http://localhost:3000/tickets`).subscribe(
    //   tickets => console.log(tickets),
    // );
  }

  getAll(): Observable<T[]> {
    return this.http.get<T[]>(`${this.apiUrl}${this.entity}`);
  }

  get(id: number): Observable<T> {
    return this.http.get<T>(`${this.apiUrl}${this.entity}/${id}`);
  }

  create(entity: T): Observable<T> {
    return this.http.post<T>(
      `${this.apiUrl}${this.entity}`,
      entity,
    );
  }

}
