import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Package, PackageService } from '../../services/package.service';

@Component({
  selector: 'app-package-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './package-list.component.html',
  styleUrls: ['./package-list.component.css']
})
export class PackageListComponent implements OnInit {
  private packageService = inject(PackageService);
  packages: Package[] = [];

  ngOnInit(): void {
    this.packageService.getPackages().subscribe((data) => {
      this.packages = data;
    });
  }

  formatCurrency(value: number) {
    return value.toLocaleString('vi-VN') + ' VNĐ';
  }
}
