import { ContentComponent } from './content.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {SplitButtonModule} from 'primeng/splitbutton';
import {TabViewModule} from 'primeng/tabview';
import { CardComponent } from './card/card.component';
import {DialogModule} from 'primeng/dialog';




@NgModule({
  declarations: [ContentComponent, CardComponent],
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    SplitButtonModule,
    TabViewModule,
    DialogModule
    
    
  ],
  exports: [
    ContentComponent
  ]
})
export class ContentModule { }
