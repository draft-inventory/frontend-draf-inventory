import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {ProductToolbarComponent} from '../product-list/product-toolbar/product-toolbar.component';
import {MatIconButton} from '@angular/material/button';
import {CommonModule} from '@angular/common';
import {SalesToolbarComponent} from './sales-toolbar/sales-toolbar.component';

@Component({
  selector: 'app-sales-list',
  standalone: true,
  imports: [
    MatTableModule,
    MatPaginatorModule,
    ProductToolbarComponent,
    MatIconButton,
    CommonModule,
    SalesToolbarComponent,
  ],
  templateUrl: './sales-list.component.html',
  styleUrl: './sales-list.component.css'
})
export class SalesListComponent implements AfterViewInit{

  @ViewChild(MatPaginator) paginator!: MatPaginator;


  columnas = [
    { titulo: "Name", name: "name" },
    { titulo: "Address", name: "address" },
    { titulo: "Date", name: "date" },
    { titulo: "Product Type", name: "productType" },
    { titulo: "Status", name: "status"}
  ];

  displayedColumns: string[] = this.columnas.map(c => c.name);

  dataSource = new MatTableDataSource<Sales>(SALES_DATA);

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(value: string) {
    this.dataSource.filter = value.trim().toLowerCase();
  }
}

export interface Sales {
  id: number;
  name: string;
  address: string;
  date: string;
  productType: string;
  status: string;
}

const SALES_DATA: Sales[] = [
  {id: 1, name: 'John Doe', address: 'Calle 123', date: '2021-09-01', productType: 'Product 1', status: 'Active'},
  {id: 2, name: 'Jane Doe', address: 'Calle 456', date: '2021-09-02', productType: 'Product 2', status: 'Inactive'},
  {id: 3, name: 'John Smith', address: 'Calle 789', date: '2021-09-03', productType: 'Product 3', status: 'Active'},
  {id: 4, name: 'Jane Smith', address: 'Calle 1011', date: '2021-09-04', productType: 'Product 4', status: 'Inactive'},
  {id: 5, name: 'John Johnson', address: 'Calle 1213', date: '2021-09-05', productType: 'Product 5', status: 'Active'},
  {id: 6, name: 'Jane Johnson', address: 'Calle 1415', date: '2021-09-06', productType: 'Product 6', status: 'Inactive'},
  {id: 7, name: 'John Brown', address: 'Calle 1617', date: '2021-09-07', productType: 'Product 7', status: 'Active'},
  {id: 8, name: 'Jane Brown', address: 'Calle 1819', date: '2021-09-08', productType: 'Product 8', status: 'Inactive'},
  {id: 9, name: 'John White', address: 'Calle 2021', date: '2021-09-09', productType: 'Product 9', status: 'Active'},
  {id: 10, name: 'Jane White', address: 'Calle 2223', date: '2021-09-10', productType: 'Product 10', status: 'Inactive'},
];
