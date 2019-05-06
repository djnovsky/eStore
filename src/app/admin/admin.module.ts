import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionModule, PasswordModule } from 'primeng/primeng';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, AccordionModule, PasswordModule, FormsModule],
  exports: [LoginComponent],
})
export class AdminModule {}
