import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-product-add',
  imports: [FormsModule,CommonModule],
  templateUrl: './product-create.html',
  styleUrl: './product-create.css',
})
export class ProductCreate {
  product = {
    id: '',
    product_name: '',
    price: 0,
    description: '',
    category: '',
    stock: true,
    image: '',
  };

  handleAdd(productForm: NgForm){
    console.log('productForm',productForm.value);
    if(!productForm.invalid){

    }
  }
}
