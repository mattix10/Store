import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css']
})

export class NavBarComponent {

  searchPanelVisibility = false;
  searchValue = '';
  showSearchPanel() {
    this.searchPanelVisibility = !this.searchPanelVisibility;
  }

  getClassName() {
    return {
      'search-panel': this.searchPanelVisibility === true,
      'search-panel-hidden': this.searchPanelVisibility === false
    };
  }

  searchProduct(value: string): any{
    this.searchValue = null;
  }
}
