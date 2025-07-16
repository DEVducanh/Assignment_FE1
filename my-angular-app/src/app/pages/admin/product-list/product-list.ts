import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  Product = [
    {
      id: 1,
      name: 'Giày Thể Thao Nike Air Max',
      price: 2500000,
      description: 'Giày chạy bộ nhẹ, êm chân, thiết kế thời trang.',
      category: 'Giày thể thao',
      stock: 20,
      image: 'https://example.com/images/nike-air-max.jpg',
    },
    {
      id: 2,
      name: 'Giày Sneaker Adidas Ultraboost',
      price: 3000000,
      description:
        'Công nghệ đệm Boost cao cấp, phù hợp cả đi học lẫn đi chơi.',
      category: 'Giày thể thao',
      stock: 15,
      image: 'https://example.com/images/adidas-ultraboost.jpg',
    },
    {
      id: 3,
      name: "Dép Quai Ngang Nam Biti's",
      price: 180000,
      description: 'Dép cao su bền, êm chân, dùng trong nhà hoặc ngoài trời.',
      category: 'Dép nam',
      stock: 50,
      image: 'https://example.com/images/dep-bitis.jpg',
    },
  ];

  handleDelete = (id: number) => {
    const isMatch = window.confirm("Bạn có chắc muốn xóa");
    if(isMatch) alert("success")
  }
}
