
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MenubarModule} from 'primeng/menubar';
import {SidebarModule} from 'primeng/sidebar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



import {ButtonModule} from 'primeng/button';
import { HeaderServiceService } from './header/header-service.service';

@NgModule({
  declarations: [ HeaderComponent],
  imports: [
    CommonModule,
    ButtonModule,
    MenubarModule,
    SidebarModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
    
  ],
  exports: [
    HeaderComponent
  ],
  providers: [HeaderServiceService]
})
export class HeaderComponentModule { }
