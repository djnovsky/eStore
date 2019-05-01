import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class StoreComponent implements OnInit {
  public selectedCategory;
  public search: string;
  constructor() {}

  ngOnInit() {}

  public onCategorySelected(category) {
    this.selectedCategory = category;
  }
  public  onSearch(s) {
    this.search = s;
    console.log('onSearch in store component',s)
  }
}
