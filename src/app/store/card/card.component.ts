import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ShopItemService } from '../shared/shop-item.service';
import { ShopItemModel } from '../shared/shop-item.model';
import { Items } from '../shared/items.model';
import { Observable } from 'rxjs/internal/Observable';

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
  localStoragMath = [];
  public visible: boolean = false;
  public selectedShopItem: ShopItemModel;
  pageCount: number;


  constructor(private shopItemsService: ShopItemService) {}

  ngOnInit() {
    this.getPaginatedShopItems(1);

    this.shopItemsService.getItemsLength().subscribe((resp: Items) => {
      this.pageCount = resp.items.length;
    });
  }
  putLike(card: any) {
    card.checked = !card.checked;
    // this.like = !this.like;
  }

  showDialog(shopItem: ShopItemModel) {
    this.visible = true;
    this.selectedShopItem = shopItem;
    //console.log(shopItem);
  }

  save(itemId?:any){
    this.localStoragMath.push(itemId._id)
    window.localStorage.setItem('ids', JSON.stringify(this.localStoragMath))
    console.log(itemId);
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
