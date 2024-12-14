import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListOptionsComponent } from '../list-options/list-options.component';
@Component({
  selector: 'app-sidebar',
  imports: [CommonModule,ListOptionsComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  @Input() isOpen: boolean = true;
}
