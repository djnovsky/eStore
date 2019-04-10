import { Component, OnInit } from '@angular/core';
import {Item} from '../shared/item.model';
import {ItemService} from '../shared/item.service';
import {Items} from '../shared/items.model';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  items: Item[];

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.itemService.getData().subscribe((resp: Items) => this.items = resp.items);
  }

}
