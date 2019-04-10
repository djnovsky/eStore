import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreComponent } from './store.component';
import { ShopItemsComponent } from './shop-items/shop-items.component';
import { CardModule } from 'primeng/card';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [StoreComponent, ShopItemsComponent, ShopItemsComponent],
  imports: [CommonModule, CardModule, HttpClientModule],
  exports: [StoreComponent],
})
export class StoreModule {}
