import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewEncapsulation,
  ViewChild
} from '@angular/core';
import { MenuItem } from 'primeng/api';
import { HeaderServiceService } from './header-service.service';
import { Categories } from '../shared/items.model';
import {User} from '../shared/user-model';
import { BasketComponent } from './basket/basket.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent implements OnInit {
  @ViewChild(BasketComponent) BasketComponent: BasketComponent
  items: MenuItem[];
  public employee = {
    email: ''
  };
  @Output() public selectedCategory = new EventEmitter();
  display = false;
  displayer = false;
  val4: string;

  constructor(private headerService: HeaderServiceService) {
  }

  ngOnInit() {
    this.getCategories();
  }

  public getCategories() {
    this.headerService
      .getCategories()
      .subscribe(
        (resp: Categories) =>
          (this.items = this.transformCategories(resp.categories))
      );
  }

  private onCategorySelected(category) {
    this.selectedCategory.emit(category);
  }

  private transformCategories(categories: string[]): MenuItem[] {
    return categories.map((category: string) => {
      return {
        label: category,
        command: () => this.onCategorySelected(category),
      };
    });
  }
// метод => відкриває корзину з вибраними елементими items з корзини
  showDialog() {
    this.display = true;
    this.BasketComponent.showItemWithBasket()
  }

  onOpenConfirmDialog() {
    this.display = false;
    this.displayer = true;
  }
  register(form) {
    console.log(form.value);
    this.headerService.register(form.value).subscribe((res) => {
      console.log(res);
      alert('Замовлення відправлено');
    }, (error) => {
        console.log(error);
        alert('Вибачте, помилка у відправленні' + error.statusText);
      }
    );
    this.displayer = false;
  }
}

