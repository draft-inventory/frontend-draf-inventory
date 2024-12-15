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
    { name: 'Productos', icon: '📦', route: '/products/list' },
    { name: 'Categorias', icon: '📂', route: '#' },
    { name: 'Stock', icon: '📊', route: '#' },
    { name: 'Analisis', icon: '📈', route: '#' },
    { name: 'Ventas', icon: '💸', route: '#' },
    { name: 'Proveedores', icon: '👨‍🌾', route: '#'},
    { name: 'Configuración', icon: '⚙️', route: '#' },
    { name: 'Cerrar Sesión', icon: '🚪', route: '#' },
  ];
}
