import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { DataSource } from './datasource';

@Injectable()
export class ProductRepository {
  private products: Product[] = [];
  private categories: string[] = [];

  constructor(private dataSource: DataSource) {
  }
}