import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OptionsComponent } from '../options/options.component';


@Component({
  selector: 'app-list-options',
  imports: [OptionsComponent, CommonModule],
  templateUrl: './list-options.component.html',
  standalone: true,
  styleUrl: './list-options.component.css'
})
export class ListOptionsComponent {
  options = [
    { name: 'Dashboard', icon: '🏠' },
    { name: 'Products', icon: '📦' },
    { name: 'Favorites', icon: '❤️' },
    { name: 'Inbox', icon: '📨' },
    { name: 'Order Lists', icon: '📝' },
    { name: 'Product Stock', icon: '📊' },
  ];

  selectedOption: string = 'Dashboard';

  onSelect(optionName: string) {
    this.selectedOption = optionName;
  }
}
