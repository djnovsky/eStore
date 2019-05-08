import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ShopItemService {
  private apiUrl = 'https://infinite-meadow-81352.herokuapp.com';
  constructor(private http: HttpClient) {}

  public getData() {
    const httpOptions = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.get(this.apiUrl + '/items', {
      headers: httpOptions,
    });
  }

  public getShopItemsByCategory(category) {
    return this.http.get(this.apiUrl + '/items', {
      params: new HttpParams().set('category', category),
    });
  }

  public getItemsLength() {
    return this.http.get(this.apiUrl + '/items');
  }

  public getPaginator(pageNumber, pageSize, category?) {
    let queryParams = new HttpParams()
      .set('pageNumber', pageNumber)
      .set('pageSize', pageSize);

    if (category) {
      queryParams = queryParams.append('category', category);
    }

    return this.http.get(this.apiUrl + '/items', {
      params: queryParams,
    });
  }

  //запрос на вибрані items на сервер
  public getItemsIdWithBasket(itemIds?) {
    return this.http.get(this.apiUrl + '/items', {
      params: new HttpParams().set('itemIds', itemIds),
    });

  }
}
