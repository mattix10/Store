import { Component } from '@angular/core';
import { Product } from '../model/product.model';
import { ProductRepository } from '../model/product.repository';
import { Cart } from '../model/cart.model';

@Component({
  selector: 'app-store',
  templateUrl: 'store.component.html'
})

export class StoreComponent {
  public selectedCategory = null;
  public productsPerPage = 5;
  public selectedPage = 1;

  constructor(private repository: ProductRepository,
              private cart: Cart) {}

  get products(): Product[] {
    const pageIndex = (this.selectedPage - 1) * this.productsPerPage;
    return this.repository.getProducts(this.selectedCategory)
    .slice(pageIndex, pageIndex + this.productsPerPage);
  }

  get categories(): string[] {
    return this.repository.getCategories();
  }

  changeCategory(newCategory?: string) {
    this.selectedCategory = newCategory;
  }

  changePageSize(newSize: number) {
    this.productsPerPage = Number(newSize);
  }

  addProductToCart(product: Product) {
    console.log(product);
    this.cart.addLine(product);
  }

}
