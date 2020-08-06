import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable()
export class Cart {
  public itemCount = 0;
  public cartPrice = 0;
  public queues: CartLine[] = [];

  addLine(product: Product, quantity: number = 1) {
    const queue = this.queues.find(q => q.product.id === product.id);
    if (queue !== undefined) {
      queue.quantity += quantity;
    } else {
      this.queues.push(new CartLine(product, quantity));
    }
    this.recalculate();
  }

  private recalculate() {
    this.itemCount = 0;
    this.cartPrice = 0;
    this.queues.forEach(q => {
      this.itemCount += q.quantity;
      this.cartPrice += (q.quantity * q.product.price);
    });
  }
}

export class CartLine {
  constructor(public product: Product, public quantity: number) {}
}