import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductRepository } from './product.repository';
import { RestDataSource } from './rest.datasource';
import { Product } from './product.model';

@Injectable()
export class ModelResolver {
  constructor(
    private model: ProductRepository,
    private dataSource: RestDataSource
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Product[]> {
    if (this.model.getProducts.length === 0) {
      return this.dataSource.getProducts();
    }
  }
}
