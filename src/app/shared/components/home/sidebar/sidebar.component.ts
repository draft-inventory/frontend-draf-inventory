import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  standalone: true,
})
export class SidebarComponent {
  @Input() isOpen: boolean = true;

  options = [
    { name: 'Dashboard', icon: '🏠', route: '/dashboard' },
    { name: 'Products', icon: '📦', route: '/products/list' },
    { name: 'Favorites', icon: '❤️', route: '#' },
    { name: 'Inbox', icon: '📨', route: '#' },
    { name: 'Order Lists', icon: '📝', route: '#' },
    { name: 'Product Stock', icon: '📊', route: '#' },
  ];
}
