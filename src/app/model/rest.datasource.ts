import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product.model';
import { Order } from './order.model';

const PROTOCOL = 'http';
const PORT = 3000;

@Injectable()
export class RestDataSource {
  baseUrl: string;
  auth_token: string;

  constructor(private http: HttpClient) {
    this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
  }

  authenticate(user: string, pass: string): Observable<boolean> {
    return this.http.post<any>(this.baseUrl + 'auth', {
      email: user,
      password: pass,
    });
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl + 'api/products');
  }

  saveProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(
      this.baseUrl + 'products',
      product,
      this.getOptions()
    );
  }

  updateProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(
      `${this.baseUrl}api/products/${product._id}`,
      product,
      this.getOptions()
    );
  }

  deleteProduct(_id: number): Observable<Product> {
    return this.http.delete<Product>(
      `${this.baseUrl}api/products/${_id}`,
      this.getOptions()
    );
  }

  updateOrder(order: Order): Observable<Order> {
    return this.http.put<Order>(
      `${this.baseUrl}api/orders/${order._id}`,
      order,
      this.getOptions()
    );
  }

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.baseUrl + 'api/orders');
  }

  deleteOrder(_id: number): Observable<Order> {
    return this.http.delete<Order>(
      `${this.baseUrl}api/orders/${_id}`,
      this.getOptions()
    );
  }

  saveOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(this.baseUrl + 'api/orders', order);
  }

  searchProduct(productName: string): Observable<any> {
    if (productName) {
      let params = new HttpParams();
      params = params.append('productName', productName);
      return this.http.get<any[]>(`${this.baseUrl}store`, { params });
    }
  }

  private getOptions() {
    return {
      headers: new HttpHeaders({
        Authorization: `Bearer<${this.auth_token}>`,
      }),
    };
  }
}
