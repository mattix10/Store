import { NgModule } from '@angular/core';
import { ProductRepository } from './product.repository';
import { Cart } from './cart.model';
import { Order } from './order.model';
import { OrderRepository } from './order.repository';
import { HttpClientModule } from '@angular/common/http';
import { RestDataSource } from './rest.datasource';
import { AuthService } from './auth.service';
import { ModelResolver } from './model.resolver';

@NgModule({
  imports: [HttpClientModule],
  providers: [ProductRepository, Cart, Order, OrderRepository,
    AuthService, {provide: RestDataSource},
    RestDataSource, ModelResolver]
})

export class ModelModule {}
