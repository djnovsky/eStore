import {Component, EventEmitter, OnInit, Output, ViewEncapsulation} from '@angular/core';
import { Items } from '../../shared/items.model';
import { ShopItemModel } from '../../shared/shop-item.model';
import {ShopItemService} from '../../shared/shop-item.service';
@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class BasketComponent implements OnInit {
  @Output() openConfirmDialog = new EventEmitter<boolean>();
  public items: ShopItemModel[] = [];
  constructor(private shopItemService: ShopItemService) {}
  ngOnInit() {
    this.showItemWithBasket()
  }
  public total() {
    return this.items.reduce((total, item) => total + item.price, 0);
  }
  close() {
  this.openConfirmDialog.emit();
  }

  //метод  => виводить в корзину
  public showItemWithBasket() {
    const ids = window.localStorage.getItem('ids') ? JSON.parse(window.localStorage.getItem('ids')): toString() ;
    this.shopItemService.getItemsIdWithBasket(ids).subscribe((resp: Items) => (this.items = resp.items))
  }
  
}

