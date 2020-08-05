import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { DataSource } from './datasource';

@Injectable()
export class ProductRepository {
  private products: Product[] = [];
  private categories: string[] = [];

  constructor(private dataSource: DataSource) {
    dataSource.getProducts().subscribe(data => {
      this.products = data;
      this.categories = data.map(p => p.category)
        .filter((c, index, array) => array.indexOf(c) == index).sort();
    });
  }

  getProducts(category: string): Product[] {
    return this.products
      .filter(p => category == null || category == p.category);
  }
}