import { Component } from '@angular/core';
import { Cart } from '../../model/cart.model';
import { ProductRepository } from '../../model/product.repository';

@Component({
  selector: 'app-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css']
})

export class NavBarComponent {

  public activeSideMenu = false;
  private searchPanelVisibility = false;
  public searchValue = '';
  public selectedCategory = null;

  constructor(public cart: Cart, public repository: ProductRepository) {}

  showSearchPanel() {
    this.searchPanelVisibility = !this.searchPanelVisibility;
  }

  getClassName() {
    return {
      'search-panel': this.searchPanelVisibility === true,
      'search-panel-hidden': this.searchPanelVisibility === false
    };
  }

  toggleClass() {
    this.activeSideMenu = !this.activeSideMenu;
  }

  searchProduct(value: string): any{
    this.searchValue = null;
  }

  get categories(): string[] {
    return this.repository.getCategories();
  }

}
