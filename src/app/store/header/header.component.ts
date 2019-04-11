import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { HeaderService } from './header.service';

export interface Categories {
  categories: string[];
}

export interface DropdownCategories {
  id: number;
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

  constructor(private headerService: HeaderService) {}

  ngOnInit() {
    this.headerService
      .getCategories()
      .pipe(map(resp => resp.categories))
      .subscribe((categories: string[]) => {
        this.categories = this.transFormCategories(categories);
      });
  }

  private transFormCategories(categories: string[]): DropdownCategories[] {
    return categories.map((category, index) => {
      return { id: index, label: category };
    });
  }
}
