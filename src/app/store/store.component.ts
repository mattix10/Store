import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { Product } from '../model/product.model';
import { ProductRepository } from '../model/product.repository';
import { Cart } from '../model/cart.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-store',
  templateUrl: 'store.component.html',
  styleUrls: ['store.component.css']
})

export class StoreComponent {
  public selectedCategory = null;
  public productsPerPage = 5;
  public selectedPage = 1;

  constructor(private repository: ProductRepository,
              private cart: Cart,
              private router: Router,
              activeRoute: ActivatedRoute
              ) {
    activeRoute.params.subscribe(params => {
      this.selectedCategory = params.category;
      this.changeCategory(this.selectedCategory);
    });
    }

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
    this.cart.addLine(product);
  }

  showCart() {
    this.router.navigateByUrl('/cart');
  }

  showProduct(id: string) {
    this.router.navigateByUrl(`store/product/${id}`);
  }

}
