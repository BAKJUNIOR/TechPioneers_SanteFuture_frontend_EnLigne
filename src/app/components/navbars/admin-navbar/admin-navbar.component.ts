import { Component } from '@angular/core';
import { UserDropdownComponent } from '../../dropdowns/user-dropdown/user-dropdown.component';

@Component({
  selector: 'app-admin-navbar',
  standalone: true,
  imports: [UserDropdownComponent],
  templateUrl: './admin-navbar.component.html',
})
export class AdminNavbarComponent {

}
