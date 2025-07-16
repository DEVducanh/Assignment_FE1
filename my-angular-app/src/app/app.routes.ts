import { Routes } from '@angular/router';
import { ProductList } from './pages/admin/product-list/product-list';
import { Admin } from './layouts/admin/admin';
import { Client } from './layouts/client/client';

export const routes: Routes = [
    {
    path: 'admin',
    component: Admin,
    children: [
      { path: 'products', component: ProductList },
      // thêm routes khác như orders, categories tại đây
    ]
  },
  {
    path: 'client',
    component: Client,
    children: [
      // thêm routes khác như orders, categories tại đây
    ]
  }
];
