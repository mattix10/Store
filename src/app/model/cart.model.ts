import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable()
export class Cart {
  public itemCount = 0;
  public cartPrice = 0;
  public queues: CartLine[] = [];
}

export class CartLine {}