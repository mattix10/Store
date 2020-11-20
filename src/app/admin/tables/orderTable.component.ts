import { Component, OnInit } from '@angular/core';
import { OrderRepository } from '../../model/order.repository';
import { Order } from '../../model/order.model';
import { ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource} from '@angular/material/table';
import { RestDataSource } from '../../model/rest.datasource';

@Component({
  templateUrl: 'orderTable.component.html',
  styleUrls: ['table.component.css']
})
export class OrderTableComponent implements OnInit {
  private showShipped = false;
  public dataSource: any;
  public selectedProduct;
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
    'id'
  ];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) tableReference: MatTable<any>;

  constructor(private repository: OrderRepository, private restDataSource: RestDataSource) {}

  ngOnInit() {
    this.restDataSource.getOrders().subscribe( res => {
       this.orders = res;
       this.dataSource = new MatTableDataSource<any>(this.orders);
       this.dataSource.paginator = this.paginator;
       this.dataSource.sort = this.sort;
      //  this.tableReference.renderRows();
     });
   }

  // getOrders(): Order[] {
  //   console.log(this.repository.getOrders());
  //   return this.repository.getOrders()
  //     .filter(o => this.showShipped || !o.shipped);
  // }

  markShipped(id: string) {
    console.log(id);
    // this.restDataSource.getOrder(id).subscribe
    // order.shipped = true;
    // this.repository.updateOrder(order);
  }

  delete(id: number) {
    this.repository.deleteOrder(id);
  }

  getSelected(product) {
    return product.name == this.selectedProduct;
  }
}
