import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreComponent } from './store.component';
import {ItemsComponent} from './item/items/items.component';
import {CardModule} from 'primeng/card';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [StoreComponent,
    ItemsComponent],
  imports: [
    CommonModule,
    CardModule,
    HttpClientModule
  ],
  exports: [
    ItemsComponent
  ],
})
export class StoreModule { }
