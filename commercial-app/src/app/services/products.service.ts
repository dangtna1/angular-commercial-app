import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { PaginationParams, Product, Products } from '../../types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private apiService: ApiService) {}

  getProducts(url: string, params: PaginationParams): Observable<Products> {
    return this.apiService.get<Products>(url, {
      params: params,
      responseType: 'json',
    });
  }

  addProduct(url: string, body: Product): Observable<any> {
    return this.apiService.post(url, body, {});
  }

  editProduct(url: string, body: Product): Observable<any> {
    return this.apiService.put(url, body, {});
  }

  deleteProduct(url: string): Observable<any> {
    return this.apiService.delete(url, {});
  }
}
