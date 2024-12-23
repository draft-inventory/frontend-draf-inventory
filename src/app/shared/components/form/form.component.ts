import {Component, Inject, Input, Output, EventEmitter, OnChanges} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatError, MatFormField, MatHint, MatLabel} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {MatButton} from '@angular/material/button';
import {MatDialogClose} from '@angular/material/dialog';
import {CommonModule, NgIf} from '@angular/common';

@Component({
  selector: 'app-form',
  imports: [
    ReactiveFormsModule,
    MatFormField,
    MatInput,
    MatButton,
    MatDialogClose,
    MatLabel,
    MatError,
    NgIf,
    CommonModule,

  ],
  templateUrl: './form.component.html',
  standalone: true,
  styleUrl: './form.component.css'
})
export class FormComponent implements OnChanges {
  @Input() fields: Array<{
    name: string;
    label: string;
    type: string;
    placeholder?: string;
    value?: string | number;
    disabled?: boolean;
    validators?: any[];
  }> = [];
  @Output() formSubmit = new EventEmitter<any>();

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({});
  }

  ngOnChanges() {
    if (this.fields) {
      this.fields.forEach((field) => {
        const control = this.fb.control(
          { value: field.value || '', disabled: field.disabled || false },
          field.validators || []
        );
        this.form.addControl(field.name, control);
      });
    }
  }

  onSubmit() {
    if (this.form.valid) {
      this.formSubmit.emit(this.form.value);
    }
  }
}
