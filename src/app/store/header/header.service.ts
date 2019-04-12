import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/internal/operators';
import {tap} from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  private resourse = 'http://localhost:3000/items/';
  private url = 'categories';

  constructor(private http: HttpClient) {}

  getCategories(): Observable<any> {
    return this.http
      .get(this.resourse + this.url)
      .pipe(
        catchError(err => throwError('Something went wrong')));
  }
}
