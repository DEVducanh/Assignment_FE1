import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-categories-list',
  imports: [CommonModule],
  templateUrl: './categories-list.html',
  styleUrl: './categories-list.css',
})
export class CategoriesList {
  Categories = [
    {
      id: 1,
      name: 'Điện thoại',
      image: 'https://cdn2.fptshop.com.vn/unsafe/iphone_16_pro_max_natural_titan_1_7b9642e6dd.png',
      description: 'Các dòng smartphone mới nhất',
      status: true,
    },
    {
      id: 2,
      name: 'Laptop',
      image: 'https://surfaceviet.vn/wp-content/uploads/2024/03/Surface-Laptop-6-Platinum.png',
      description: 'Các dòng Laptop mới nhất',
      status: true,
    },
  ];
   handleDelete = (id: number) => {
    const isMatch = window.confirm("Bạn có chắc muốn xóa");
    if(isMatch) alert("success")
  }
}
