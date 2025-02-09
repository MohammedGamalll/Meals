import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CatigouriesService {
  constructor(private _HttpClient: HttpClient) {}

  getCatigouries(): Observable<any> {
    return this._HttpClient.get(
      'https://www.themealdb.com/api/json/v1/1/list.php?c=list'
    );
  }
}
