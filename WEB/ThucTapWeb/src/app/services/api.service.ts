import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ApiService {

  baseUrl = "https://localhost:7104/api";

  constructor(private http: HttpClient) {}

  login(data: any) {
    return this.http.post(this.baseUrl + "/auth/login", data);
  }

  getProducts() {
    return this.http.get(this.baseUrl + "/products");
  }

  getUsers() {
    return this.http.get(this.baseUrl + "/users");
  }
}
