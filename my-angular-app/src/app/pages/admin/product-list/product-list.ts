import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule,RouterLink],
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
      image: 'https://ash.vn/cdn/shop/files/e4a8315663cf4e71f977a5d3bb7a8dea_1800x.jpg?v=1730711468',
    },
    {
      id: 2,
      name: 'Giày Sneaker Adidas Ultraboost',
      price: 3000000,
      description:
        'Công nghệ đệm Boost cao cấp, phù hợp cả đi học lẫn đi chơi.',
      category: 'Giày thể thao',
      stock: 15,
      image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/a3996cc46d9c44ad92ec9ded7271c100_9366/Giay_Ultraboost_1.0_trang_JH9212_HM1.jpg',
    },
    {
      id: 3,
      name: "Dép Quai Ngang Nam Biti's",
      price: 180000,
      description: 'Dép cao su bền, êm chân, dùng trong nhà hoặc ngoài trời.',
      category: 'Dép nam',
      stock: 50,
      image: 'https://down-vn.img.susercontent.com/file/vn-11134211-7ras8-m4img97o19lbbd',
    },
  ];

  handleDelete = (id: number) => {
    const isMatch = window.confirm("Bạn có chắc muốn xóa");
    if(isMatch) alert("success")
  }
}
