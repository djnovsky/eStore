import { HeaderServiceService } from '../../headerComponent/header/header-service.service';
import { Component, OnInit } from '@angular/core';
import {ViewEncapsulation} from '@angular/core';
import { Items } from '../../headerComponent/header/items.model';
import { ShopItemModel } from '../../headerComponent/header/shop-item.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CardComponent implements OnInit {
  display: boolean = false;
  cardItem:any = []
  item:any = {};
  items: ShopItemModel[];
  constructor(private itemsService: HeaderServiceService) { }

  ngOnInit() {
    this.itemsService.getItems().subscribe((resp: Items) => (this.items = resp.items));
  
  
    console.log(this.cardItem)
  }


  showDialog() {
    this.display = true;
}

save() {
  alert("Товар добавленний в корзину")
  this.cardItem.push(this.item)
  console.log(this.cardItem)
}



}
