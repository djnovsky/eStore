import { HeaderServiceService } from '../../headerComponent/header/header-service.service';




import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import {ViewEncapsulation} from '@angular/core'






@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
    items: MenuItem[];
  
    
  constructor(private itemsService: HeaderServiceService) { }

 
  ngOnInit() {
      
        
     
    
   
   
     

    this.items = [
            {
                label: 'Телефони',
                items: [
                    {label: 'Samsung', command: () => {
                        console.log("ok")} },
                    {label: 'Iphone'}
                ]
            },
            {
                label: 'Годинники',
                items: [
                    {label: 'Чоловічі'},
                    {label: 'Жіночі'}
                ]
            },
            {
              label: 'Навушники',
            //   items: [
            //       {label: 'Delete'},
            //       {label: 'Refresh'}
            //   ]
             },
          {
            label: 'Б/У товари',
            
        },
      ];
  }

  
}
