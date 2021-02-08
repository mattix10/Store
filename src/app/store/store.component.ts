import { Component } from '@angular/core';
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
  public productsPerPage = 15;
  public selectedPage = 1;
  private query;
  public routerUrl: string;
  
  constructor(private repository: ProductRepository, private cart: Cart, private router: Router, activeRoute: ActivatedRoute) {
    activeRoute.queryParams.subscribe(query => {
      if (query.productName) {
        this.query = query.productName;
        this.repository.searchProduct(this.query);
      }
    });
    activeRoute.params.subscribe(params => {
      if (params.category) {
        this.selectedCategory = params.category;
        this.changeCategory(this.selectedCategory);
      }
    });
    this.routerUrl = this.router.url;
    }

  getproducts(): Product[] {
    if (this.query != undefined) {
      return this.repository.getSearchedProducts();
    } else {
      const pageIndex = (this.selectedPage - 1) * this.productsPerPage;
      return this.repository.getProducts(this.selectedCategory)
      .slice(pageIndex, pageIndex + this.productsPerPage);
    }
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
