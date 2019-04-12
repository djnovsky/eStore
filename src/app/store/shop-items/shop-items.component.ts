import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {ShopItemModel} from '../shared/shop-item.model';
import {ShopItemService} from '../shared/shop-item.service';
import {Items} from '../shared/items.model';

@Component({
  selector: 'app-items',
  templateUrl: './shop-items.component.html',
  styleUrls: ['./shop-items.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ShopItemsComponent implements OnInit {
  items: ShopItemModel[];
  headers = ['price', 'description'];
  @Input()
  public set selectedCategory(category: string) {
    this.getItems(category);
  }

  //
  // public get selectedCategory() {
  //
  // }

  constructor(private itemService: ShopItemService) {
  }

  ngOnInit() {
    this.itemService
      .getData()
      .subscribe((resp: Items) => {
        this.items = resp.items;
      });
  }

  getItems(category) {
    this.itemService.getDataByCategory(category).subscribe((items: {items: any}) => {
      console.log(items);
      this.items = items.items;
      }
    );
  }
}
