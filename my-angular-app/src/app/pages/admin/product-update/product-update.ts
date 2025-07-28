import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-update',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './product-update.html',
  styleUrl: './product-update.css',
})
export class ProductUpdate {
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

  handleUpdate() {
    console.log(this.productForm);
  }
}
