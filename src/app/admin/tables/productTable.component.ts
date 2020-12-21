import { Component, OnInit } from '@angular/core';
import { ProductRepository } from '../../model/product.repository';
import { Product } from '../../model/product.model';
import { ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { RestDataSource } from '../../model/rest.datasource';

@Component({
  templateUrl: 'productTable.component.html',
  styleUrls: ['table.component.css']
})

export class ProductTableComponent implements OnInit{
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) tableReference: MatTable<any>;
  
  public dataSource: any;
  public pageSizeOptions: number;
  public products: Array<any>;
  public displayedColumns: string[] = ['name', 'category', 'description', 'price', 'id'];
  public selectedProduct;
  public openModal = false;
  public choosenProduct;

  constructor(private repository: ProductRepository, private restDataSource: RestDataSource) {}

  ngOnInit(): void {
    this.refresh();
  }

  refresh() {
    this.restDataSource.getProducts().subscribe( res => {
      this.products = res;
      this.dataSource = new MatTableDataSource<any>(this.products);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  closeModal(openModal: boolean): void {
    this.openModal = openModal;
    this.refresh();
  }

  editProduct(id: string): void {
    this.openModal = true;
    this.choosenProduct =  this.products.find(p => p._id == id);
  }

  getProduct(id: string): Product {
    return this.products.find(p => p._id == id);
  }
  
  getProducts(): Product[] {
    return this.repository.getProducts();
  }

  deleteProduct(id: number): void {
    this.repository.deleteProduct(id);
    this.refresh();
  }

  getSelected(product: Product): boolean {
    return product.name == this.selectedProduct;
  }
}
