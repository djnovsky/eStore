import { Component, OnInit } from '@angular/core';
import {ItemService} from './shared/item.service';
import {Item} from './shared/item.model';
import {Items} from './shared/items.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  items: Item[] = [];

  constructor(private is: ItemService) {
  }

  ngOnInit() {
    const data = this.is.getData();
    this.items = [];
    data.subscribe(o => {
      this.items = (o as Items).items;
    });

  }
}
