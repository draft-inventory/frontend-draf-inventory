import {ChangeDetectionStrategy, Component, EventEmitter, Inject, Input, Output} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './dialog.component.html',
  standalone: true,
  styleUrls: ['./dialog.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogComponent{
    constructor(@Inject(MAT_DIALOG_DATA) public data:{
      title: string;
      content: string;
    }) {
    }
}
