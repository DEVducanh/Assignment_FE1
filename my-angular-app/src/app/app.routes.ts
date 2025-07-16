import { Routes } from '@angular/router';
import { ProductList } from './pages/admin/product-list/product-list';
import { Admin } from './layouts/admin/admin';
import { Client } from './layouts/client/client';
import { UserList } from './pages/admin/user-list/user-list';
import { CategoriesList } from './pages/admin/categories-list/categories-list';
import { BrandList } from './pages/admin/brand-list/brand-list';

export const routes: Routes = [
    {
    path: 'admin',
    component: Admin,
    children: [
      { path: 'products', component: ProductList },
      { path: 'categories', component: CategoriesList },
      { path: 'users', component: UserList },
      { path: 'brands', component: BrandList },
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
