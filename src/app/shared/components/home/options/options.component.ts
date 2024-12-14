import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-options',
    imports: [CommonModule],
    templateUrl: './options.component.html',
    standalone: true,
    styleUrl: './options.component.css'
})
export class OptionsComponent {
  @Input() name: string = '';
  @Input() icon: string = '';
  @Input() isSelected: boolean = false;

  @Output() select = new EventEmitter<void>();
}
