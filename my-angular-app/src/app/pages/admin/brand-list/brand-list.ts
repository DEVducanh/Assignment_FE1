import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-brand-list',
  imports: [CommonModule,RouterLink],
  templateUrl: './brand-list.html',
  styleUrl: './brand-list.css',
})
export class BrandList {
  Brands = [
    {
      id: 1,
      name: 'Nike',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/1200px-Logo_NIKE.svg.png',
      country: 'USA',
      founded: 1976,
    },
    {
      id: 2,
      name: 'Bitis',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQhWMwRz4wfvggZ8ytCFQFfwyWNMcveI5lrw&s',
      country: 'Việt Nam',
      founded: 2000,
    },
  ];
  handleDelete = (id: number) => {
    const isMatch = window.confirm("Bạn có chắc muốn xóa");
    if(isMatch) alert("success")
  }
}
