import { Component, OnInit } from '@angular/core';
import { OrderRepository } from '../../model/order.repository';
import { Order } from '../../model/order.model';
import { ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { RestDataSource } from '../../model/rest.datasource';

@Component({
  templateUrl: 'orderTable.component.html',
  styleUrls: ['table.component.css'],
})
export class OrderTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) tableReference: MatTable<any>;

  public dataSource: any;
  public selectedProduct: object;
  public orders: any[];
  public displayedColumns: string[] = [
    'name',
    'state',
    'zip',
    'address',
    'cart.queues[0].product.name',
    'cart.queues[0].product.itemCount',
    'cart.queues[0].product.price',
    'cart.itemCount',
    'cart.cartPrice',
    'id',
  ];

  constructor(
    private repository: OrderRepository,
    private restDataSource: RestDataSource
  ) {}

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.restDataSource.getOrders().subscribe((res) => {
      this.orders = res;
      this.dataSource = new MatTableDataSource<any>(this.orders);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  delete(id: number) {
    this.repository.deleteOrder(id);
    this.refresh();
  }

  getSelected(product): any {
    return product.name == this.selectedProduct;
  }
}
