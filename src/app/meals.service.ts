import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MealsService {
  constructor(private _HttpClient: HttpClient) {}

  private apiUrl = 'https://www.themealdb.com/api/json/v1/1';
  getMealsByCategory(category: string): Observable<any> {
    return this._HttpClient.get(`${this.apiUrl}/filter.php?c=${category}`);
  }

  getMeals(): Observable<any> {
    return this._HttpClient.get(`${this.apiUrl}/search.php?s=`);
  }

  getMealById(id: string): Observable<any> {
    return this._HttpClient.get(`${this.apiUrl}/lookup.php?i=${id}`);
  }
}
