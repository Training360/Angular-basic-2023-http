import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface IBaseEntity {
  id?: number;
}

@Injectable({
  providedIn: 'root'
})
export class BaseService<T extends IBaseEntity> {

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

  update(entity: T): Observable<T> {
    return this.http.patch<T>(
      `${this.apiUrl}${this.entity}/${entity.id}`,
      entity,
    );
  }

  delete(entity: T): Observable<T> {
    return this.http.delete<T>(
      `${this.apiUrl}${this.entity}/${entity.id}`,
    );
  }

}
