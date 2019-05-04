import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreComponent } from './store.component';
import { CardModule } from 'primeng/card';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';
import {InputTextModule, MessageModule, PanelModule, SidebarModule, SplitButtonModule} from 'primeng/primeng';
import { MenubarModule } from 'primeng/menubar';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { PaginatorModule } from 'primeng/paginator';
import { RadioButtonModule } from 'primeng/radiobutton';
import { BasketComponent } from './header/basket/basket.component';
import { TableModule } from 'primeng/table';
import { DataViewModule } from 'primeng/dataview';
import { ButtonModule } from 'primeng/button';
import {MessagesModule} from 'primeng/messages';
import {ShopItemDialogComponent} from '../shop-item-dialog/shop-item-dialog.component';
import {KeyFilterModule} from 'primeng/keyfilter';

@NgModule({
  declarations: [
    StoreComponent,
    HeaderComponent,
    CardComponent,
    BasketComponent,
    ShopItemDialogComponent,
  ],
  imports: [
    CommonModule,
    CardModule,
    SidebarModule,
    MenubarModule,
    DialogModule,
    SplitButtonModule,
    FormsModule,
    PaginatorModule,
    RadioButtonModule,
    TableModule,
    PanelModule,
    DataViewModule,
    ButtonModule,
    MessagesModule,
    ButtonModule,
    KeyFilterModule,
    InputTextModule,
    MessageModule,

  ],
  exports: [StoreComponent],
})
export class StoreModule {}
