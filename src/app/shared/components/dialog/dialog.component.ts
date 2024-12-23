import {ChangeDetectionStrategy, Component, EventEmitter, Inject, Input, Output} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {FormComponent} from '../form/form.component';

@Component({
  selector: 'app-dialog',
  imports: [MatDialogModule, MatButtonModule, FormComponent],
  templateUrl: './dialog.component.html',
  standalone: true,
  styleUrls: ['./dialog.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { title: string; fields: any[] },
    private dialogRef: MatDialogRef<DialogComponent>
  ) {}

  onFormSubmit(formData: any) {
    console.log('Form Data:', formData);
    this.dialogRef.close(formData);
  }
}
