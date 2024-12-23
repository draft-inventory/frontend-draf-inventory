import {Component, EventEmitter, Output, Input, inject, Inject} from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { MatTableDataSource } from '@angular/material/table';
import {DialogComponent} from '../../../../../shared/components/dialog/dialog.component';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {Validators} from '@angular/forms';

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

@Component({
  selector: 'app-product-toolbar',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatOptionModule,
    MatDialogModule,
  ],
  templateUrl: './product-toolbar.component.html',
  styleUrls: ['./product-toolbar.component.css']
})
export class ProductToolbarComponent {
  @Output() filterChange = new EventEmitter<string>();

  // Recibimos el dataSource para acceder a filteredData
  @Input() dataSource!: MatTableDataSource<PeriodicElement>;

  // Recibimos las columnas para exportar
  @Input() columnsForExport!: { header: string; dataKey: string }[];


constructor(public  dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {
        title: 'Add Stock',
        fields: [
          {
            name: 'name',
            label: 'Name',
            type: 'text',
            placeholder: 'Enter the product name',
            validators: [Validators.required],
          },
          {
            name: 'description',
            label: 'Description',
            type: 'textarea',
            placeholder: 'Enter the product description',
            validators: [Validators.required],
          },
          {
            name: 'productCode',
            label: 'Product Code',
            type: 'text',
            placeholder: 'Enter the product code',
            validators: [Validators.required],
          },
          {
            name: 'expirationDate',
            label: 'Expiration Date',
            type: 'date',
            placeholder: 'Select the expiration date',
            validators: [Validators.required],
          },
          {
            name: 'locationId',
            label: 'Location',
            type: 'text',
            placeholder: 'Enter the location ID',
            validators: [Validators.required],
          },
          {
            name: 'categoryId',
            label: 'Category',
            type: 'text',
            placeholder: 'Enter the category ID',
            validators: [Validators.required],
          },
          {
            name: 'quantityId',
            label: 'Quantity',
            type: 'number',
            placeholder: 'Enter the quantity',
            validators: [Validators.required, Validators.min(1)],
          },
          {
            name: 'priceId',
            label: 'Price',
            type: 'number',
            placeholder: 'Enter the price',
            validators: [Validators.required, Validators.min(0)],
          },

        ]

      },
      width: '500px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log('Form submitted with data:', result);
      }
    });
  }


  onFilterChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement) {
      this.filterChange.emit(inputElement.value);
    }
  }

  exportData(format: string) {
    const dataToExport = this.dataSource.filteredData;
    switch (format) {
      case 'Pdf':
        this.exportToPDF(dataToExport);
        break;
      case 'Excel':
        this.exportToExcel(dataToExport);
        break;
      case 'CSV':
        this.exportToCSV(dataToExport);
        break;
      case 'Imprimir':
        this.printData(dataToExport);
        break;
      default:
        console.log('Formato no soportado');
    }
  }

  exportToPDF(data: PeriodicElement[]) {
    const doc = new jsPDF('p', 'pt', 'letter');

    // Usamos las columnas del input
    const columns = this.columnsForExport;

    const formattedData = data.map(item => ({
      ...item,
      expirationDate: item.expirationDate ? item.expirationDate.toLocaleDateString() : ''
    }));

    (doc as any).autoTable({
      columns: columns,
      body: formattedData,
      startY: 50,
      styles: { fontSize: 8 },
      headStyles: { fillColor: [22, 160, 133] }
    });

    doc.setFontSize(14);
    doc.text('Reporte de Productos', 40, 30);

    doc.save('productos.pdf');
  }

  exportToExcel(data: PeriodicElement[]) {
    const formattedData = data.map(item => ({
      ...item,
      expirationDate: item.expirationDate ? item.expirationDate.toISOString().split('T')[0] : ''
    }));

    const worksheet = XLSX.utils.json_to_sheet(formattedData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Productos');

    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const blob = new Blob([excelBuffer], { type: 'application/octet-stream' });
    saveAs(blob, 'productos.xlsx');
  }

  exportToCSV(data: PeriodicElement[]) {
    const headers = this.columnsForExport.map(col => col.header);

    const rows = data.map(item => {
      return this.columnsForExport.map(col => {
        const value = (item as any)[col.dataKey];
        if (col.dataKey === 'expirationDate' && value) {
          return value.toLocaleDateString();
        }
        return value ?? '';
      });
    });

    const csvContent = [headers, ...rows].map(e => e.join(',')).join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.setAttribute('download', 'productos.csv');
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  printData(data: PeriodicElement[]) {
    const headers = this.columnsForExport.map(col => col.header);

    const rows = data.map(item => {
      const rowCells = this.columnsForExport.map(col => {
        const value = (item as any)[col.dataKey];
        if (col.dataKey === 'expirationDate' && value) {
          return value.toLocaleDateString();
        }
        return value ?? '';
      });
      return `<tr>${rowCells.map(c => `<td>${c}</td>`).join('')}</tr>`;
    }).join('');

    const htmlContent = `
      <html>
        <head>
          <title>Imprimir Productos</title>
          <style>
            table {
              width: 100%;
              border-collapse: collapse;
            }
            th, td {
              border: 1px solid #333;
              padding: 8px;
              text-align: left;
            }
            th {
              background-color: #f5f5f5;
            }
          </style>
        </head>
        <body>
          <h1>Reporte de Productos</h1>
          <table>
            <thead>
              <tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr>
            </thead>
            <tbody>
              ${rows}
            </tbody>
          </table>
          <script>
            window.onload = function() {
              window.print();
              window.close();
            };
          </script>
        </body>
      </html>
    `;

    const printWindow = window.open('', '_blank', 'width=800,height=600');
    if (printWindow) {
      printWindow.document.open();
      printWindow.document.write(htmlContent);
      printWindow.document.close();
    }
  }
}
