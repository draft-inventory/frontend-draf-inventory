import { Component, EventEmitter, Output, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  standalone: true
})
export class NavbarComponent implements OnInit {
  @Output() sidebarToggle = new EventEmitter<void>();
  currentTheme: string = 'light';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      //  Definimos el tema actual en función de la configuración del sistema
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.currentTheme = prefersDark ? 'dark' : 'light';
      this.applyTheme(this.currentTheme);
    }
  }

  toggleSidebar() {
    this.sidebarToggle.emit();
  }

  onThemeChange(event: any) {
    const theme = event.target.value;
    this.applyTheme(theme);
  }

  private applyTheme(theme: string) {
    this.currentTheme = theme;
    if (theme === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }
}
