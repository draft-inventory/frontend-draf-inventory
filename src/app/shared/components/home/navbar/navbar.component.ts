import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatMenuModule } from '@angular/material/menu';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatExpansionModule,
    MatMenuModule,
    CommonModule,
    RouterOutlet,
  ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  @ViewChild('sidenav') sidenav: MatSidenav | undefined;

  isHandset$: Observable<boolean>;

  userName = 'Juan Pérez';
  modulosMenus = [
    {
      modulo: 'Inventario',
      menus: [
        { nombre: 'Inventario' },
        { nombre: 'Movimientos' },
        { nombre: 'Reportes' },
      ],
    },
    {
      modulo: 'Configuración',
      menus: [
        { nombre: 'Sociedades' },
        { nombre: 'Usuarios' },
      ],
    },
  ];

  constructor(
    private breakpointObserver: BreakpointObserver
  ) {
    this.isHandset$ = this.breakpointObserver
      .observe(Breakpoints.Handset)
      .pipe(
        map((result) => result.matches),
        shareReplay()
      );
  }

  get userInitials(): string {
    return this.userName
      .split(' ')
      .map((name) => name[0])
      .join('');
  }

  navigateTo(menu: string): void {
    console.log(`Navegando a ${menu}`);
  }

  myAccount(): void {
    console.log('Accediendo a Mi Cuenta');
  }

  logout(): void {
    console.log('Cerrando sesión');
  }
}
