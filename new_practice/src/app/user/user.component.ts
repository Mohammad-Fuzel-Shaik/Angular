import { Component, OnInit } from '@angular/core';
import { ProductListComponent } from "../product-list/product-list.component";
import { LoggerComponent } from '../logger/logger.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [ProductListComponent, LoggerComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
    name="Mohammad Fuzel";
    loggerMessage = 'logs changes ';

    products = [
      { name: 'Laptop', price: 999, inStock: true },
      { name: 'Smartphone', price: 499, inStock: false },
      { name: 'Headphones', price: 199, inStock: true },
      { name: 'Monitor', price: 299, inStock: false }
    ];
    
    constructor() { }
    ngOnInit(): void{
    }
    changeMessage(): void {
      this.loggerMessage = 'Updated at ' + new Date().toISOString(); 
    
      console.log('changeMessage() called');
    }
}

