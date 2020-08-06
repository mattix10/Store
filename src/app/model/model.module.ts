import { NgModule } from '@angular/core';
import { ProductRepository } from './product.repository';
import { DataSource } from './datasource';
import { Cart } from './cart.model';
import { Order } from './order.model';
import { OrderRepository } from './order.repository';

@NgModule({
  providers: [ProductRepository, DataSource, Cart, Order, OrderRepository]
})

export class ModelModule {}
