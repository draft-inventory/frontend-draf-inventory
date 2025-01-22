import {Component, EventEmitter, Input, Output, ChangeDetectionStrategy} from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatTableDataSource} from '@angular/material/table';
import {Sales} from '../sales-list.component';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {MatDatepicker} from '@angular/material/datepicker';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCard} from '@angular/material/card';


@Component({
  selector: 'app-sales-toolbar',
  imports: [
    MatMenuModule,
    MatButtonModule,
    MatFormField,
    MatInput,
    MatLabel,
    MatDatepicker,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatCard,

  ],
  templateUrl: './sales-toolbar.component.html',
  standalone: true,
  styleUrl: './sales-toolbar.component.css'
})
export class SalesToolbarComponent {
  @Output() filterChange = new EventEmitter<string>();
  @Input() dataSource!: MatTableDataSource<Sales>;

  filterOptions = {
    productsTypes: [ 'Technology', 'Book', 'Clothing' ],
    ordersStatus: [ 'Complete', 'Pending', 'Cancelled' ]
  };


  onFilterChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement) {
      this.filterChange.emit(inputElement.value);
    }
  }
}
