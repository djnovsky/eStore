import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ShopItemService {
  constructor(private http: HttpClient) {}

  public getData() {
    const httpOptions = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.get('http://localhost:3000/items', {
      headers: httpOptions,
    });
  }
  /*
  * GET http://localhost:3000/items
returns list of all shop-items from the DB
GET http://localhost:3000/items?itemIds=5ca4cb59b971de1cd0eab92e,5ca6194f5518432ecc49719a,5ca63a0f8b04c825f0d856da
returns all shop-items with such ids . If pass one id than get one item
GET http://localhost:3000/items?searchParams=’some search params’
returns list of selected  by searchParams  shop-items
GET http://localhost:3000/items/categories
returns all existing categories. One item should belong to one category
GET http://localhost:3000/items?category=categoryName
returns list of selected  by categoryName shop-items
*Infinite scroll or pagination
*GET http://localhost:3000/items?pageNumber=pageNumber&pageSize=pageSize*/
}
