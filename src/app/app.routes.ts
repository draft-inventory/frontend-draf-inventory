import { Routes } from '@angular/router';
import {ProductListComponent} from './features/inventory/components/product-list/product-list.component';
import { HomeComponent } from './shared/components/home/home.component';

const productRoutes: Routes = [
  {path: 'list', component: ProductListComponent}
];

const allRoutes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard',component: HomeComponent},
  {path: 'products', children: productRoutes},
]

export const routes: Routes = [
  ...allRoutes,
];


