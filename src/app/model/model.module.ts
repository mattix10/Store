import { NgModule } from '@angular/core';
import { ProductRepository } from './product.repository';
import { DataSource } from './datasource';
import { Cart } from './cart.model';
import { Order } from './order.model';
import { OrderRepository } from './order.repository';
import { HttpClientModule } from '@angular/common/http';
import { RestDataSource } from './rest.datasource';

@NgModule({
  imports: [HttpClientModule],
  providers: [ProductRepository, Cart, Order, OrderRepository, {
    provide: DataSource, useClass: RestDataSource }]
})

export class ModelModule {}
