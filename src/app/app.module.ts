import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AdminModule } from './admin/admin.module';
import { StoreModule } from './store/store.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreComponent } from './store/store.component';
import { ItemComponent } from './store/item/item.component';
import { ItemsComponent } from './store/item/items/items.component';
import {CardModule} from 'primeng/card';

import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'admin', component: LoginComponent },
  {path: '', component: StoreComponent}
];
import { LoginComponent } from './admin/login/login.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    StoreModule,
    RouterModule.forRoot(appRoutes),
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
