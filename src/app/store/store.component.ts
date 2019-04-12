import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss'],
})
export class StoreComponent implements OnInit {
  selectedCategory: string;
  constructor() {}

  ngOnInit() {}

  onCategorySelected(selectedCategory: string) {
    this.selectedCategory = selectedCategory;
  }
}
