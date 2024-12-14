import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements AfterViewInit {

  displayedColumns: string[] = [ 'name', 'description', 'productCode', 'expirationDate', 'locationId', 'categoryId', 'quantityId', 'priceId'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  id: string;
  name: string;
  description: string;
  productCode: string;
  expirationDate: Date;
  locationId: string;
  categoryId: string;
  quantityId: string;
  priceId: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    id: '1',
    name: 'Product 1',
    description: 'Description of Product 1',
    productCode: 'P001',
    expirationDate: new Date('2024-12-31'),
    locationId: 'L001',
    categoryId: 'C001',
    quantityId: 'Q001',
    priceId: 'PR001',
  },
  {
    id: '2',
    name: 'Product 2',
    description: 'Description of Product 2',
    productCode: 'P002',
    expirationDate: new Date('2025-06-30'),
    locationId: 'L002',
    categoryId: 'C002',
    quantityId: 'Q002',
    priceId: 'PR002',
  },
  {
    id: '3',
    name: 'Product 3',
    description: 'Description of Product 3',
    productCode: 'P003',
    expirationDate: new Date('2023-11-15'),
    locationId: 'L003',
    categoryId: 'C003',
    quantityId: 'Q003',
    priceId: 'PR003',
  },
  {
    id: '4',
    name: 'Product 4',
    description: 'Description of Product 4',
    productCode: 'P004',
    expirationDate: new Date('2024-03-10'),
    locationId: 'L004',
    categoryId: 'C004',
    quantityId: 'Q004',
    priceId: 'PR004',
  },
  {
    id: '5',
    name: 'Product 5',
    description: 'Description of Product 5',
    productCode: 'P005',
    expirationDate: new Date('2025-01-20'),
    locationId: 'L005',
    categoryId: 'C005',
    quantityId: 'Q005',
    priceId: 'PR005',
  },
];

