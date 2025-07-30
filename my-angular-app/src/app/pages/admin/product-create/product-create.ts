import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-create',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './product-create.html',
  styleUrl: './product-create.css',
})
export class ProductCreate {
  productForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.productForm = this.fb.group({
      productName: '',
      price: 0,
      description: '',
      imageUrl: '',
      category: '',
      stock: true,
    });
  }

  handleAdd = () => {
    console.log(this.productForm);
  };
}
