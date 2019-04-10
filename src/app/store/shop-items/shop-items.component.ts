import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ShopItemModel } from '../shared/shop-item.model';
import { ShopItemService } from '../shared/shop-item.service';
import { Items } from '../shared/items.model';

@Component({
  selector: 'app-items',
  templateUrl: './shop-items.component.html',
  styleUrls: ['./shop-items.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ShopItemsComponent implements OnInit {
  items: ShopItemModel[];

  constructor(private itemService: ShopItemService) {}

  ngOnInit() {
    this.itemService
      .getData()
      .subscribe((resp: Items) => (this.items = resp.items));
  }
}
