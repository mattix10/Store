import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestDataSource } from './rest.datasource';

@Injectable()
export class AuthService {
  constructor(private datasource: RestDataSource) {}

  authenticate(username: string, password: string): Observable<boolean> {
    return this.datasource.authenticate(username, password);
  }

  get authenticated(): boolean {
    return this.datasource.auth_token != null;
  }

  getToken(): string {
    return localStorage.getItem('token');
  }

  clear(): void{
    this.datasource.auth_token = null;
  }
}