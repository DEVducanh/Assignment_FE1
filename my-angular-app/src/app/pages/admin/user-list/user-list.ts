import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list',
  imports: [CommonModule],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css',
})
export class UserList {
  Users = [
    { id: 1, name: 'Nguyen Van A', password: '123456', age: 20 },
    { id: 2, name: 'Tran Thi B', password: 'abcdef', age: 22 },
    { id: 3, name: 'Le Van C', password: 'pass1234', age: 19 },
    { id: 4, name: 'Pham Thi D', password: 'hello2024', age: 21 },
  ];

  handleDelete = (id: number) => {
    const isMatch = window.confirm('Bạn có chắc muốn xóa');
    if (isMatch) alert('success');
  };
}
