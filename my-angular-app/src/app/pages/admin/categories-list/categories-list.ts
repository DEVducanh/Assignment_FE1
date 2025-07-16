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
      image: 'https://example.com/images/phone.jpg',
      description: 'Các dòng smartphone mới nhất',
      status: true,
    },
    {
      id: 2,
      name: 'Laptop',
      image: 'https://example.com/images/phone.jpg',
      description: 'Các dòng Laptop mới nhất',
      status: true,
    },
  ];
   handleDelete = (id: number) => {
    const isMatch = window.confirm("Bạn có chắc muốn xóa");
    if(isMatch) alert("success")
  }
}
