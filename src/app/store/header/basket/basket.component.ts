import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {ShopItemService} from '../../shared/shop-item.service';
import {logger} from 'codelyzer/util/logger';
import { Items } from '../../shared/items.model';
import { ShopItemModel } from '../../shared/shop-item.model';
@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class BasketComponent implements OnInit {
  itemsBasket:any = [];


  public items: ShopItemModel[] = [];



  constructor(private shopItemService: ShopItemService) {
  }

  ngOnInit() {
    this.showItemWithBasket()



  }

  public total() {
    return this.items.reduce((total, item) => total + item.price, 0);

  }

  public delBasket() {
  }


  public showItemWithBasket() {
    // const ids =  JSON.parse(window.localStorage.getItem('ids')).toString();
    //
    // return this.shopItemService.getItemsIdWithBasket(ids).subscribe((resp: Items) => (this.items = resp.items));


    const ids = window.localStorage.getItem('ids') ? JSON.parse(window.localStorage.getItem('ids')): toString() ;
    this.shopItemService.getItemsIdWithBasket(ids).subscribe((resp: Items) => (this.items = resp.items))
    console.log(ids)
  }

}

