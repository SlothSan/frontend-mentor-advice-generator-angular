import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Advice } from '../model/advice';

@Injectable({
  providedIn: 'root',
})
export class AdviceService {
  protected url: string = 'https://api.adviceslip.com/advice';
  constructor(private http: HttpClient) {}

  getAdvice(): Observable<Advice> {
    return this.http.get<Advice>(this.url);
  }
}
