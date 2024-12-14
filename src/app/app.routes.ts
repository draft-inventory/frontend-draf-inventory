import { Routes } from '@angular/router';
import { ProductListComponent } from './features/inventory/components/product-list/product-list.component';
import { HomeComponent } from './shared/components/home/home.component';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';

const productRoutes: Routes = [
  { path: 'list', component: ProductListComponent },
];

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'products', children: productRoutes },
    ],
  },
  { path: '**', redirectTo: 'dashboard' },
];
