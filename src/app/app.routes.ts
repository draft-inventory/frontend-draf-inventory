import { Routes } from '@angular/router';
import {ProductListComponent} from './features/inventory/components/product-list/product-list.component';

const productRoutes: Routes = [
  {path: 'list', component: ProductListComponent}
];

const allRoutes: Routes = [
  {path: 'products', children: productRoutes}
]

export const routes: Routes = [
  ...allRoutes,
];


