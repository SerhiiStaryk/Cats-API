import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Cat } from '../types/cat/cat';
import { Breed } from '../types/cat/breed';

@Injectable({
  providedIn: 'root',
})
export class CatsService {
  private readonly host: string = environment.BASE_URL;
  private readonly key: string = environment.CATS_API_KEY;

  constructor(private http: HttpClient) {}

  public getAllCats(count: number): Observable<Cat[]> {
    return this.http.get<Cat[]>(
      `${this.host}/v1/images/search?limit=${count}&api_key=${this.key}`
    );
  }

  public getCatsByBreed(id: string, count: number): Observable<Cat[]> {
    return this.http.get<Cat[]>(
      `${this.host}/v1/images/search?limit=${count}&breed_ids=${id}&api_key=${this.key}`
    );
  }

  public getCatById(id: string): Observable<Cat> {
    return this.http.get<Cat>(`${this.host}/v1/images/${id}`);
  }

  public getBreeds(): Observable<Breed[]> {
    return this.http.get<Breed[]>(`${this.host}/${'v1/breeds/'}`);
  }
}
