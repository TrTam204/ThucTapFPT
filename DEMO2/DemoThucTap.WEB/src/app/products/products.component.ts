import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>
      <h2>Danh sách sản phẩm</h2>
      <button (click)="logout()">Đăng xuất</button>
      <ul>
        <li *ngFor="let product of products">{{ product.name }} - {{ product.price }}</li>
      </ul>
    </div>
  `
})
export class ProductsComponent implements OnInit {
  products: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://localhost:5020/api/products').subscribe((data: any) => {
      this.products = data;
    });
  }

  logout() {
    localStorage.removeItem('token');
    window.location.reload();
  }
}