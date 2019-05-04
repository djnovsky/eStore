import {Component, EventEmitter, OnInit, Output, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class BasketComponent implements OnInit {
  @Output() openConfirmDialog = new EventEmitter<boolean>();
  public items = [
    { title: 'Potato', category: 'Eat', subcategory: 'vegetables', price: 500 },
    {
      title: 'Milk',
      category: 'Eat',
      subcategory: 'dairy products',
      price: 300,
    },
    {
      title: 'Cheese',
      category: 'Eat',
      subcategory: 'dairy products',
      price: 200,
    },
    { title: 'iphone', category: 'Phones', subcategory: 'IOS', price: 100 },
    {
      title: 'Samsung',
      category: 'Phones',
      subcategory: 'Android',
      price: 700,
    },
    { title: 'Gread', category: 'Other', subcategory: 'Soneone', price: 800 },
    { title: 'fdsk', category: 'Other', subcategory: 'Somesecond', price: 550 },
  ];
  constructor() {}
  ngOnInit() {}
  public total() {
    return this.items.reduce((total, item) => total + item.price, 0);
  }

  close() {
  this.openConfirmDialog.emit();
  }
}
