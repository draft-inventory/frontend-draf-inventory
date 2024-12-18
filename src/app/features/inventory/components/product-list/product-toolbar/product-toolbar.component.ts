import { Component, EventEmitter, Output } from '@angular/core';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';

@Component({
  selector: 'app-product-toolbar',
  imports: [
    MatFormField,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatOptionModule,
  ],
  templateUrl: './product-toolbar.component.html',
  standalone: true,
  styleUrl: './product-toolbar.component.css'
})
export class ProductToolbarComponent {
  // Mandamos el valor del input al padre
  @Output() filterChange = new EventEmitter<string>();

  openDialog() {

  }

  onFilterChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement) {
      this.filterChange.emit(inputElement.value);
    }
  }
}
