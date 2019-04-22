import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
  public items = [
    {description: 'some description', title: 'Potato', price: 500},
    {description: 'more description', title: 'Milk' , price: 300},
    {description: 'more description', title: 'Cheese' , price: 200},
    {description: 'more description', title: 'iphone' , price: 100},
    {description: 'more description', title: 'Samsung' , price: 700},
    {description: 'more description', title: 'Gread' , price: 800},
    {description: 'more description', title: 'fdsk' , price: 550},
  ];
  constructor() {
  }
  ngOnInit() {
  }
  public total() {
    return this.items.reduce((total, item) => total + item.price, 0);
  }
}
