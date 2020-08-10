import { Component } from '@angular/core';
import { OrderRepository } from '../model/order.repository';
import { Order } from '../model/order.model';

@Component({
  templateUrl: 'orderTable.component.html'
})
export class OrderTableComponent {
  showShipped = false;

  constructor(private repository: OrderRepository) {}

  getOrders(): Order[] {
    console.log(this.repository.getOrders());
    return this.repository.getOrders()
      .filter(o => this.showShipped || !o.shipped);
  }

  markShipped(order: Order) {
    order.shipped = true;
    this.repository.updateOrder(order);
  }
}