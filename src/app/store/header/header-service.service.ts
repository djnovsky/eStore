import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root',
})
export class HeaderServiceService {
  private resourse = 'http://localhost:3000/items/';
  private url = 'categories';

  constructor(private http: HttpClient) {}

  public getCategories(): Observable<any> {
    return this.http
      .get(this.resourse + this.url)
      .pipe(catchError(err => throwError('Something went wrong')));
  }

  // onPageChage() {
  //   this.http.get('http://localhost:3000/items', {
  //     params: new HttpParams().set('pageNumber', yourpageNumber).set('pageSize', yourpageSize)}
  // }
}
