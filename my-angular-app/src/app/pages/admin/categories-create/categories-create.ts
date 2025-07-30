import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-categories-create',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './categories-create.html',
  styleUrl: './categories-create.css',
})
export class CategoriesCreate {
  categoryForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.categoryForm = this.fb.group({
      name: [''],
      image: [''],
      description: [''],
      status: [''],
    });
  }

  handleSubmit(){
    console.log(this.categoryForm.value);
    
  }
}
