import { Component } from '@angular/core';
import { Product } from '../model/product.model';
import { ProductRepository } from '../model/product.repository';
import { ActivatedRoute } from '@angular/router';
import { Cart } from '../model/cart.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: 'productDetail.component.html',
  styleUrls: ['productDetail.component.css']
})

export class ProductDetailComponent {
  product: Product = new Product();

  constructor(private repository: ProductRepository, activeRoute: ActivatedRoute,
              private cart: Cart) {
    const id = activeRoute.snapshot.params.id;
    if (id !== null) {
      Object.assign(this.product, repository.getProduct(id));
    }
  }

  addProductToCart(product: Product) {
    this.cart.addLine(product);
  }
}
