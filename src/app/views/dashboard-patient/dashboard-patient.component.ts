import { Component } from '@angular/core';
import { SidebarComponent } from "../../components/sidebar/sidebar.component";
import { CarnetComponent } from "../carnet/carnet.component";
import { AdminNavbarComponent } from "../../components/navbars/admin-navbar/admin-navbar.component";

@Component({
  selector: 'app-dashboard-patient',
  standalone: true,
  imports: [SidebarComponent, CarnetComponent, AdminNavbarComponent],
  templateUrl: './dashboard-patient.component.html',
  styleUrl: './dashboard-patient.component.css'
})
export class DashboardPatientComponent {

}
