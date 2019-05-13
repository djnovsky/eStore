import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/internal/operators';
import { User } from '../shared/user-model';
import { JwtResponse } from '../shared/users.model';

@Injectable({
  providedIn: 'root',
})
export class HeaderServiceService {
  private apiUrl = 'https://infinite-meadow-81352.herokuapp.com';

  constructor(private http: HttpClient) {}

  public getCategories(): Observable<any> {
    return this.http
      .get(this.apiUrl + '/items/categories')
      .pipe(catchError(err => throwError('Something went wrong')));
  }
  public register(user: User) {
    return this.http.post(`${this.apiUrl}/items/createorder`, user);
  }
}
