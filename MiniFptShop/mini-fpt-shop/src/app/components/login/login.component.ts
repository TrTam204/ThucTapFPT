import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AccountService, AuthResponse, UserCredentials } from '../../services/account.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  private accountService = inject(AccountService);

  username = '';
  password = '';
  message = '';

  onSubmit(): void {
    const credentials: UserCredentials = {
      username: this.username,
      password: this.password
    };

    this.accountService.login(credentials).subscribe({
      next: (response: AuthResponse) => {
        this.message = `Đăng nhập thành công: ${response.username}`;
      },
      error: (error) => {
        this.message = error.status === 401
          ? 'Sai tên đăng nhập hoặc mật khẩu.'
          : 'Đã có lỗi khi đăng nhập.';
      }
    });
  }
}
