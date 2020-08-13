import { Component } from '@angular/core';
import { ProductRepository } from '../model/product.repository';

@Component({
  selector: 'app-footer',
  templateUrl: 'footer.component.html',
  styleUrls: ['footer.component.css']
})

export class FooterComponent {

  constructor(private repository: ProductRepository) {}

  get categories(): string[] {
    return this.repository.getCategories();
  }

  private _companyLinks: Array<string> = [
    'O nas',
    'Kariera',
    'Regulamin',
    'Polityka prywatności'
  ];

  private _supportLinks: Array<string> = [
    'Pomoc',
    'Dostawa',
    'Tabele rozmiarów',
    'Zwroty'
  ];

  private _offersLinks: Array<string> = [
    'Bestsellery',
    'Promocje',
    'Kody rabatowe',
  ];

  public get companyLinks(): Array<string> {
    return this._companyLinks;
  }

  public get supportLinks(): Array<string> {
    return this._supportLinks;
  }

  public get offersLinks(): Array<string> {
    return this._offersLinks;
  }





}