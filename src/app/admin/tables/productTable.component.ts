import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ProductRepository } from '../../model/product.repository';
import { Product } from '../../model/product.model';
import { ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatTable, MatTableDataSource} from '@angular/material/table';
import { RestDataSource } from '../../model/rest.datasource';
import { pipe } from 'rxjs';

@Component({
  templateUrl: 'productTable.component.html',
  styleUrls: ['table.component.css']
})
export class ProductTableComponent implements OnInit{
  dataSource: any;
  pageSizeOptions: number;
  products: Array<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) tableReference: MatTable<any>;

  constructor(private repository: ProductRepository, private restDataSource: RestDataSource) {
  }
  displayedColumns: string[] = ['name', 'category', 'description', 'price', 'id'];
  selectedProduct;

  ngOnInit(): void {
   this.restDataSource.getProducts().subscribe( res => {
      this.products = res;
      this.dataSource = new MatTableDataSource<any>(this.products);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      // this.tableReference.renderRows();
    });
  }
  
  getProducts(): Product[] {
    return this.repository.getProducts();
  }

  deleteProduct(id: number): void {
    this.repository.deleteProduct(id);
  }

  getSelected(product): boolean {
    return product.name == this.selectedProduct;
  }
}
