import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AdminModule } from './admin/admin.module';
import { StoreModule } from './store/store.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {StoreComponent} from './store/store.component';

const appRoutes: Routes = [
  // {path: 'admin', component: LoginComponent},
  {path: '', component: StoreComponent}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    StoreModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
