import { EventEmitter, Input } from '@angular/core';
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
  @Input()
  activeCartWindow;
    // public activeCartWindow = false;


  constructor(public cart: Cart) {}

  closeWindow() {
    this.closed.emit();
  }

  // showCartWindow() {
  //   this.activeCartWindow = !this.activeCartWindow;
  // }
  getClassName() {
    return {
      'window-wrapper': this.activeCartWindow === true,
      'cart-window': this.activeCartWindow === false
    };
  }
}
