import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AccountService, AuthResponse, RegisterRequest } from '../../services/account.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  private accountService = inject(AccountService);

  username = '';
  password = '';
  message = '';

  onSubmit(): void {
    const payload: RegisterRequest = {
      username: this.username,
      password: this.password,
      role: 'User'
    };

    this.accountService.register(payload).subscribe({
      next: (response: AuthResponse) => {
        this.message = `Đăng ký thành công: ${response.username}`;
      },
      error: () => {
        this.message = 'Đăng ký không thành công, vui lòng thử lại.';
      }
    });
  }
}
