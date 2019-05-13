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
  public llocalStoragMath:any = [];
  item = {};


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


 //видаляє всі товари з корзини
 dellItem(itemId:any){
    
    let delItem = window.localStorage.getItem('ids') ? JSON.parse(window.localStorage.getItem('ids')): toString() ;
    // console.log(delItem)
     for( let i = 0; i < delItem.length; i++){ 
      if ( delItem[i] === itemId._id) {
        delItem.splice(i, 1); 
        i--;
      }
     
   };
   window.localStorage.setItem('ids', JSON.stringify(delItem));
   this.showItemWithBasket()
  }

  
  
}

