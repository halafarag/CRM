import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Deals } from '../models/deals';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DealsService {
  constructor(private http: HttpClient) {}
  getAllDeals(): Observable<Deals[]> {
    return this.http.get<Deals[]>(`assets/data/data.json`);
  }
}
