import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-categories-list',
  imports: [CommonModule, RouterLink],
  templateUrl: './categories-list.html',
  styleUrl: './categories-list.css',
})
export class CategoriesList {
  Categories = [
    {
      id: 1,
      name: 'Giày Thể Thao',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfZFV4aKh7DrzLVAMbizYmZxt7YlhMonMsNA&s',
      description: 'Các dòng smartphone mới nhất',
      status: true,
    },
    {
      id: 2,
      name: 'Dép',
      image:
        'https://vietmadeco.vn/wp-content/uploads/2023/07/Dep-quai-ngang-nam-HY329-xam-dam-2-1.jpg',
      description: 'Các dòng Laptop mới nhất',
      status: true,
    },
  ];
  handleDelete = (id: number) => {
    const isMatch = window.confirm('Bạn có chắc muốn xóa');
    if (isMatch) alert('success');
  };
}
