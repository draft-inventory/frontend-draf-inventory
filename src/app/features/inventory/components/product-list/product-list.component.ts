import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatIconButton } from '@angular/material/button';
import { ProductToolbarComponent } from './product-toolbar/product-toolbar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    MatTableModule,
    MatPaginatorModule,
    ProductToolbarComponent,
    MatIconButton,
    CommonModule,
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements AfterViewInit {

  columnas = [
    { titulo: "Name", name: "name" },
    { titulo: "Description", name: "description" },
    { titulo: "Product Code", name: "productCode" },
    { titulo: "Expiration Date", name: "expirationDate" },
    { titulo: "Location", name: "locationId" },
    { titulo: "Category", name: "categoryId" },
    { titulo: "Quantity", name: "quantityId" },
    { titulo: "Price", name: "priceId" },
    { titulo: "Actions", name: "actions" }
  ];

  // displayedColumns se genera dinámicamente a partir del array "columnas"
  displayedColumns: string[] = this.columnas.map(c => c.name);

  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  // Creamos las columnas para exportar
  columnsForExport = this.columnas
    .filter(c => c.name !== 'actions')
    .map(c => ({ header: c.titulo, dataKey: c.name }));

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit() {
    //  Filtro sólo en  la columna 'name'
    this.dataSource.filterPredicate = (data: PeriodicElement, filter: string) => {
      return data.name.toLowerCase().includes(filter.toLowerCase());
    };
  }

  applyFilter(value: string) {
    this.dataSource.filter = value.trim().toLowerCase();
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
    name: 'Laptop',
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
    name: 'Celular',
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
    name: 'Monitor',
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
    name: 'Mause',
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
    name: 'Teclado',
    description: 'Description of Product 5',
    productCode: 'P005',
    expirationDate: new Date('2025-01-20'),
    locationId: 'L005',
    categoryId: 'C005',
    quantityId: 'Q005',
    priceId: 'PR005',
  },
];

