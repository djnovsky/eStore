import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users-category',
  templateUrl: './users-category.component.html',
  styleUrls: ['./users-category.component.scss'],
})
export class UsersCategoryComponent implements OnInit {
  constructor(private routing: ActivatedRoute) {}

  ngOnInit() {
    this.routing.params.subscribe(resp => console.log(resp));
  }
}
