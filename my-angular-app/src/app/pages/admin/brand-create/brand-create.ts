import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-brand-create',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './brand-create.html',
  styleUrl: './brand-create.css',
})
export class BrandCreate {
  brandForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.brandForm = this.fb.group({
      brandName: [''],
      logo: [''],
      country: [''],
      founded: [''],
    });
  }

  handleSubmit(){
    console.log(this.brandForm.value);
    
  }
}
