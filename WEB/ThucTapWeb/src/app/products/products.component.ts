import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.css'
})
export class ProductsComponent implements OnInit {

  products: any[] = [];
  loading = false;
  errorMessage = '';

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.loading = true;
    this.errorMessage = '';
    this.api.getProducts().subscribe({
      next: (res: any) => {
        this.products = res;
        this.loading = false;
      },
      error: (err) => {
        this.errorMessage = 'Không thể tải danh sách sản phẩm';
        this.loading = false;
        console.error('Load products error:', err);
      }
    });
  }
}
