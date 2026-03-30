import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.css'
})
export class LoginComponent {

  email = '';
  password = '';
  errorMessage = '';

  constructor(private api: ApiService, private router: Router) {}

  login() {
    this.errorMessage = '';
    this.api.login({
      name: "tam",
      email: this.email,
      password: this.password,
      role: "admin"
    }).subscribe({
      next: (res: any) => {
        localStorage.setItem('token', res.token);
        this.router.navigate(['/products']);
      },
      error: (err) => {
        this.errorMessage = 'Đăng nhập thất bại. Vui lòng kiểm tra email và mật khẩu.';
        console.error('Login error:', err);
      }
    });
  }
}
