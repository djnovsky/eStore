import { Component, OnInit } from '@angular/core';

import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  year: number = new Date().getFullYear();
  items: MenuItem [];
  infos: MenuItem [];

  constructor() {}

  ngOnInit() {
    this.items = [
      {
          label: 'Contacts',
          items: [
              {label: 'email: eStoreProject@gmail.com'},
              {label: 'tel.number: +380342255555'},
              {label: 'facebook: www.facebook....'}
          ]
      },

  ];
    this.infos = [
    {
          label: 'About us',
          items: [
            {label: 'Some info about team'}

        ]
    },

];
  }
}
