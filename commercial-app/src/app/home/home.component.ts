import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { ProductComponent } from '../components/product/product.component';
import { Product } from '../../types';
import { CommonModule } from '@angular/common';
import { PaginatorModule } from 'primeng/paginator';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductComponent, CommonModule, PaginatorModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  rows: number = 5;
  totalRecords: number = 0;
  products: Product[] = [];

  constructor(private productsService: ProductsService) {}

  fetchProducts(page: number, perPage: number) {
    this.productsService
      .getProducts('http://localhost:3000/clothes', { page, perPage })
      .subscribe((data) => {
        this.products = data.items;
        this.totalRecords = data.total;
      });
  }

  onPageChange(event: any) {
    this.fetchProducts(event.page, event.rows);
  }

  ngOnInit() {
    this.fetchProducts(0, this.rows);
  }

  onProductOutput(product: Product) {
    console.log('Output:', product);
  }
}
