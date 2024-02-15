import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { RouterLink } from '@angular/router';
interface MenuItems {
  /**
* The path that will be loaded when you click on the menu
*/
  path: string;
  /**
 * The text that will be displayed in the menu
*/
  label: string;
}

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [NgForOf,MatListModule,RouterLink],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {
  
  menuItems: Array<MenuItems>= [
    { path: '/dashboard',
     label: 'Home'
     },
     { path: '/categories',
     label: 'Categories'
     },
     { path: '/suppliers',
     label: 'Suppliers'
     },
  ]
  
}
