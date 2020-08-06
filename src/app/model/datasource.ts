import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { Observable, from } from 'rxjs';
import { Order } from './order.model';

@Injectable()
export class DataSource {
  private products: Product[] = [
    new Product(1, 'Produkt 1', 'Kat. 1', 'Produkt 1 (Kategoria 1)', 100),
    new Product(2, 'Produkt 2', 'Kat. 2', 'Produkt 2 (Kategoria 2)', 200),
    new Product(3, 'Produkt 3', 'Kat. 3', 'Produkt 3 (Kategoria 3)', 300),
  ];

  getProducts(): Observable<Product[]> {
    return from([this.products])
  }

  saveOrder(order: Order): Observable<Order> {
    return from([order]);
  }
}