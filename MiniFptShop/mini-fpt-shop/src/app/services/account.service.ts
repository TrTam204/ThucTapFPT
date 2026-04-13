import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

export interface UserCredentials {
  username: string;
  password: string;
}

export interface AuthResponse {
  id: number;
  username: string;
  role: string;
}

export interface RegisterRequest extends UserCredentials {
  role?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private http = inject(HttpClient);

  login(credentials: UserCredentials): Observable<AuthResponse> {
    return this.http.post<AuthResponse>('/api/users/login', credentials);
  }

  register(payload: RegisterRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>('/api/users/register', payload);
  }
}
