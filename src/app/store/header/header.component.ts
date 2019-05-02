import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { MenuItem } from 'primeng/api';
import { HeaderServiceService } from './header-service.service';
import { Categories } from '../shared/items.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent implements OnInit {
  items: MenuItem[];
  @Output() public selectedCategory = new EventEmitter();
  display: boolean = false;
  constructor(private headerService: HeaderServiceService) {}

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
  showDialog() {
    this.display = true;
  }
}
