import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-brand-list',
  imports: [CommonModule],
  templateUrl: './brand-list.html',
  styleUrl: './brand-list.css',
})
export class BrandList {
  Brands = [
    {
      id: 1,
      name: 'Apple',
      logo: 'https://example.com/logos/apple.png',
      country: 'USA',
      founded: 1976,
    },
    {
      id: 2,
      name: 'Samsung',
      logo: 'https://example.com/logos/apple.png',
      country: 'Korea',
      founded: 1976,
    },
  ];
  handleDelete = (id: number) => {
    const isMatch = window.confirm("Bạn có chắc muốn xóa");
    if(isMatch) alert("success")
  }
}
