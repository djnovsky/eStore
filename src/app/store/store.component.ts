import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class StoreComponent implements OnInit {
  public selectedCategory;
  public lowestPrice = false;
  public highesPrice = false;



  constructor() {}

  ngOnInit() {}

  public onCategorySelected(category) {
    this.selectedCategory = category;
  }

  sortFromLowest(event: any) {
    this.lowestPrice = event;
    if ( this.lowestPrice) {
      this.highesPrice = !this.lowestPrice;
    }
  }

  sortFromHighest(event: any) {
    this.highesPrice = event;
    if ( this.highesPrice) {
      this.lowestPrice = !this.highesPrice;
    }
  }
}
