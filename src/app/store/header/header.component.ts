import {ChangeDetectorRef, Component, EventEmitter, OnInit, Output, ViewEncapsulation} from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { HeaderService } from './header.service';
import {SelectItem} from 'primeng/api';

export interface Categories {
  categories: string[];
}

export interface DropdownCategories {
  value: string;
  label: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent implements OnInit {
  categories: DropdownCategories[];
  category: string;
  @Output() public selectedCategory = new EventEmitter<string>();

  constructor(private headerService: HeaderService, private cdRef: ChangeDetectorRef) {}

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this.headerService
      .getCategories()
      .pipe(
    map(resp => resp.categories))
      .subscribe((categories: string[]) => {
        this.categories = this.transFormCategories(categories);
      });
  }

  public onCategoryChange() {
    if (!this.category) {return; }
    this.selectedCategory.emit(this.category);
  }

  private transFormCategories(categories: string[]): DropdownCategories[] {
    return categories.map((category, index) => {
      return { value: category, label: category };
    });
  }
}
