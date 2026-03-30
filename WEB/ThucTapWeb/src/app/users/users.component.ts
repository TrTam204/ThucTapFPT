import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.css'
})
export class UsersComponent implements OnInit {

  users: any[] = [];
  loading = false;
  errorMessage = '';

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.loading = true;
    this.errorMessage = '';
    this.api.getUsers().subscribe({
      next: (res: any) => {
        this.users = res;
        this.loading = false;
      },
      error: (err) => {
        this.errorMessage = 'Không thể tải danh sách người dùng';
        this.loading = false;
        console.error('Load users error:', err);
      }
    });
  }
}
