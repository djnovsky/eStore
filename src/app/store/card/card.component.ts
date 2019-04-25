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
  public like = true;
  @Input()
  public set selectedCategory(category: string) {
    this.getShopItemsByCategory(category, 1);
    this._selectedCategory = category;
  }

  public get selectedCategory() {
    return this._selectedCategory;
  }
  public pageSize = 10;

  /**
   * Private field for caching selected category
   */
  private _selectedCategory: string;

  display = false;
  cardItem: any = [];
  item: any = {};
  items: ShopItemModel[];

  constructor(private shopItemsService: ShopItemService) {}

  ngOnInit() {
    this.getPaginatedShopItems(1);
  }
  putLike() {
    this.like = !this.like;
  }

  showDialog() {
    this.display = true;
  }

  save() {
    alert('Товар добавленний в корзину');
    this.cardItem.push(this.item);
    console.log(this.cardItem);
  }

  getShopItemsByCategory(category, pageNumber?) {
    this.getPaginatedShopItems(pageNumber, category);
  }

  public paginate(event) {
    const page = Number(event.page) + 1;
    this.getPaginatedShopItems(page, this.selectedCategory);
  }

  private getPaginatedShopItems(pageNumber, category?) {
    this.shopItemsService
      .getPaginator(pageNumber, this.pageSize, category)
      .subscribe((resp: Items) => (this.items = resp.items));
  }
}
