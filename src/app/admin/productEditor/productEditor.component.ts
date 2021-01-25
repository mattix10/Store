import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductRepository } from '../../model/product.repository';

@Component({
  selector: 'app-productEditor',
  templateUrl: 'productEditor.component.html',
  styleUrls: ['productEditor.component.css'],
})
export class ProductEditorComponent {
  @Input() choosenProduct;
  @Input() openModal;
  @Output() openModalEvent = new EventEmitter();

  constructor(private repository: ProductRepository) {}

  close() {
    this.openModal = false;
    this.openModalEvent.emit(this.openModal);
  }

  save() {
    this.repository.saveProduct(this.choosenProduct);
    this.close();
  }
}
