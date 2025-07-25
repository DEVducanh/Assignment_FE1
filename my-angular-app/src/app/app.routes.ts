import { Routes } from '@angular/router';
import { ProductList } from './pages/admin/product-list/product-list';
import { Admin } from './layouts/admin/admin';
import { Client } from './layouts/client/client';
import { UserList } from './pages/admin/user-list/user-list';
import { CategoriesList } from './pages/admin/categories-list/categories-list';
import { BrandList } from './pages/admin/brand-list/brand-list';
import { ProductDetail } from './pages/client/product-detail/product-detail';
import { ProductCreate } from './pages/admin/product-create/product-create';
import { Home } from './pages/client/home/home';

export const routes: Routes = [
  {
    path: 'admin',
    component: Admin,
    children: [
      { path: '', redirectTo: 'products', pathMatch: 'full' },
      { path: 'products', component: ProductList },
      { path: 'products/create', component: ProductCreate },
      { path: 'categories', component: CategoriesList },
      { path: 'users', component: UserList },
      { path: 'brands', component: BrandList },
      // thêm routes khác như orders, categories tại đây
    ],
  },
  {
    path: 'client',
    component: Client,
    children: [
      {path: '', redirectTo: 'home', pathMatch:'full'},
      { path: 'home', component: Home },
      { path: 'products/:id', component: ProductDetail },
      // thêm routes khác như orders, categories tại đây
    ],
  },
];
