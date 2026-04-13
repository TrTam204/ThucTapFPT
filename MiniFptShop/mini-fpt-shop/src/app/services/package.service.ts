import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

export interface Package {
  id: number;
  name: string;
  price: number;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class PackageService {
  private http = inject(HttpClient);

  getPackages(): Observable<Package[]> {
    return this.http.get<Package[]>('/api/packages');
  }
}
