import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IGift } from '../models/gift-model';

@Injectable({
  providedIn: 'root'
})
export class GiftsService {
  url: string = 'http://localhost:3001/gifts'
  
  constructor(private http: HttpClient) {}
  
  getAll(): Observable<IGift[]> {
    return this.http.get<IGift[]>(this.url).pipe(
      map((gifts: IGift[]) => this.shuffleArray(gifts))
    )
  }
  
  getRandom(count: number): Observable<IGift[]> {
    return this.http.get<IGift[]>(this.url).pipe(
      map((gifts: IGift[]) => this.shuffleArray(gifts).slice(0, count))
    );
  }
  
  shuffleArray<T>(array: T[]): T[] {
    return array
      .map((value: T) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value)
  }
  
}
