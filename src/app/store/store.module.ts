import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreComponent } from './store.component';
import { CardModule } from 'primeng/card';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';
import { SidebarModule, SplitButtonModule } from 'primeng/primeng';
import { MenubarModule } from 'primeng/menubar';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { PaginatorModule } from 'primeng/paginator';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ShopItemDialogComponent} from "../shop-item-dialog/shop-item-dialog.component";

@NgModule({
  declarations: [StoreComponent, HeaderComponent, CardComponent, ShopItemDialogComponent],
  imports: [
    CommonModule,
    CardModule,
    SidebarModule,
    MenubarModule,
    DialogModule,
    SplitButtonModule,
    FormsModule,
    PaginatorModule,
    RadioButtonModule
  ],
  exports: [StoreComponent],
})
export class StoreModule {}
