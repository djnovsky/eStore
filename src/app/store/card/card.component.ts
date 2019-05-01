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
    this.getShopItemsByCategory(category, 1);
    this._selectedCategory = category;
  }

  public get selectedCategory() {
    return this._selectedCategory;
  }

    @Input() public set inputSearch(inputSearch){
      this._inputSearch = inputSearch;
      // console.log(this._inputSearch);
        if (this._inputSearch) {
            this.getsearchResult(this._inputSearch)
        }
  }

    public get inputSearch(){
     return   this._inputSearch;
    }

  private _inputSearch: string;
  public pageSize = 10;

  /**
   * Private field for caching selected category
   */
  private _selectedCategory: string;

  display = false;
  cardItem: any = [];
  item: any = {};
  items: ShopItemModel[];
  itemInfo: any = [];

  constructor(private shopItemsService: ShopItemService) {}

  ngOnInit() {
    this.getPaginatedShopItems(1);
  }

  showDialog(item) {
    this.display = true;
    this.itemInfo = item;
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

  public getsearchResult(seachStr) {
    this.shopItemsService
        .searchProsucts(seachStr)
        .subscribe((response: Items ) => {
                  this.items = response.items;
              },
            error => {
              alert(error.statusText);
              console.log(error);
            }
        );
  }
}
