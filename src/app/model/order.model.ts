import { Injectable } from '@angular/core';
import { Cart } from './cart.model';

@Injectable()
export class Order {
  public _id?: number;
  public id?: number;
  public name: string;
  public address: string;
  public city: string;
  public state: string;
  public zip: string;
  public country: string;
  public shipped = false;

  constructor(public cart: Cart) {}

  clear() {
    this.id = null;
    this.name = this.city = this.address = null;
    this.zip = this.state = this.country = null;
    this.shipped = false;
    this.cart.clear();
  }
}