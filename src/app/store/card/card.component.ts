import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ShopItemService } from '../shared/shop-item.service';
import { ShopItemModel } from '../shared/shop-item.model';
import { Items } from '../shared/items.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CardComponent implements OnInit {
  @Input()
  public set selectedCategory(category: string) {
    this.getShopItemsByCategory(category);
  }
  selectedValue: string = "red";
  
  display = false;
  cardItem: any = [];
  item: any = {};
  items: ShopItemModel[];

  constructor(private shopItemsService: ShopItemService) {}

  ngOnInit() {
    this.shopItemsService
      .getData()
      .subscribe((resp: Items) => (this.items = resp.items));
  };


  showDialog() {
    this.display = true;
    
  }

  save() {
    alert('Товар добавленний в корзину');
    this.cardItem.push(this.item);
    console.log(this.cardItem);
  }

  getShopItemsByCategory(category) {
    this.shopItemsService
      .getShopItemsByCategory(category)
      .subscribe((resp: Items) => (this.items = resp.items));
  }

}
