import { Component } from '@angular/core';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {MatButton} from '@angular/material/button';
import {MatOption, MatSelect} from '@angular/material/select';

@Component({
  selector: 'app-product-toolbar',
  imports: [
    MatFormField,
    MatInput,
    MatButton,
    MatSelect,
    MatOption,
    MatLabel
  ],
  templateUrl: './product-toolbar.component.html',
  standalone: true,
  styleUrl: './product-toolbar.component.css'
})
export class ProductToolbarComponent {

  openDialog() {

  }
}
