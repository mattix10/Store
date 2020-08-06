import { NgModule } from '@angular/core';
import { ProductRepository } from './product.repository';
import { DataSource } from './datasource';
import { Cart } from './cart.model';

@NgModule({
  providers: [ProductRepository, DataSource, Cart]
})

export class ModelModule {}
