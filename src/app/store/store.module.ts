import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonModule, DropdownModule, InputTextModule, PanelModule} from 'primeng/primeng';
import { CardModule } from 'primeng/card';

import { StoreComponent } from './store.component';
import { ShopItemsComponent } from './shop-items/shop-items.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DataViewModule} from "primeng/dataview";

@NgModule({
  declarations: [
    StoreComponent,
    ShopItemsComponent,
    ShopItemsComponent,
    HeaderComponent,
  ],
  imports: [
    PanelModule,
    DataViewModule,
    CommonModule,
    CardModule,
    DropdownModule,
    FormsModule,
    BrowserAnimationsModule,
    ButtonModule,
    InputTextModule,
  ],
  exports: [StoreComponent],
})
export class StoreModule {}
