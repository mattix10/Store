import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Component } from '@angular/core';
import { Cart } from '../../model/cart.model';

@Component({
  selector: 'app-cart-window',
  templateUrl: 'cartWindow.component.html',
  styleUrls: ['cartWindow.component.css']
})

export class CartWindowComponent {
  @Output()
  closed: EventEmitter<string> = new EventEmitter<string>();

  constructor(public cart: Cart) {}

  closeWindow() {
    this.closed.emit();
  }
}
