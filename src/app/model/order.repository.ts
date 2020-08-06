import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { DataSource } from './datasource';
import { Order } from './order.model';

@Injectable()
export class OrderRepository {

  constructor(private dataSource: DataSource) {}

  saveOrder(order: Order): Observable<Order> {
    return this.dataSource.saveOrder(order);
  }
}