import { Component } from '@angular/core';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { AdminNavbarComponent } from '../../components/navbars/admin-navbar/admin-navbar.component';
import { HeaderStatsComponent } from '../../components/headers/header-stats/header-stats.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [SidebarComponent, AdminNavbarComponent, HeaderStatsComponent],
  templateUrl: './admin.component.html',
})
export class AdminComponent {
  
}
