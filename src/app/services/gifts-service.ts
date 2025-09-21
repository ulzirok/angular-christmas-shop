import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IGift } from '../models/gift-model';
import { GIFT_CATEGORIES } from '../shared/constants/gift-categories';

@Injectable({
  providedIn: 'root',
})
export class GiftsService {
  url = 'https://my-json-server.typicode.com/ulzirok/christmas-shop-db/gifts';
  categories = GIFT_CATEGORIES;

  constructor(private http: HttpClient) {}

  getAll(): Observable<IGift[]> {
    return this.http.get<IGift[]>(this.url).pipe(map((gifts: IGift[]) => this.shuffleArray(gifts)));
  }

  getRandom(count: number): Observable<IGift[]> {
    return this.http
      .get<IGift[]>(this.url)
      .pipe(map((gifts: IGift[]) => this.shuffleArray(gifts).slice(0, count)));
  }

  shuffleArray<T>(array: T[]): T[] {
    return array
      .map((value: T) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
  }

  getFiltered(count: number, category?: string): Observable<IGift[]> {
    return this.http.get<IGift[]>(this.url).pipe(
      map((gifts: IGift[]) => {
        if (category === 'all') {
          return gifts;
        }
        return gifts.filter((gift) => gift.categoryName === category);
      }),
      map((gifts: IGift[]) => this.shuffleArray(gifts)),
    );
  }
}
