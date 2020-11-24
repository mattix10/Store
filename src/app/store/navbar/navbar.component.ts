import { ElementRef, ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { Cart } from '../../model/cart.model';
import { ProductRepository } from '../../model/product.repository';

@Component({
  selector: 'app-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css']
})

export class NavBarComponent {

  @ViewChild('searchInput') searchInput: ElementRef
  public activeSideMenu = false;
  public activeCartWindow = false;
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

  showCartWindow() {
    console.log('eluuwina')
    this.activeCartWindow= !this.activeCartWindow;
  }

  searchProduct(value: string): any{
    console.log(value);
    this.searchInput.nativeElement.value = '';
    this.repository.searchProduct(value);
  }

  get categories(): string[] {
    return this.repository.getCategories();
  }

}
