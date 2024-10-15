import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { AdminComponent } from './layouts/admin/admin.component';
import { UserDropdownComponent } from './components/dropdowns/user-dropdown/user-dropdown.component';
import { HomeComponent } from './views/patient/home/home.component';
import { ConsultationComponent } from './views/patient/consultation/consultation.component';
import { CardTableStatsComponent } from './components/cards/card-table-stats/card-table-stats.component';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';


@NgModule({
  declarations: [
  AdminComponent,
  UserDropdownComponent,
  HomeComponent,
  ConsultationComponent,
  CardTableStatsComponent
],
  imports: [CommonModule],
  providers: [provideCharts(withDefaultRegisterables())],
  bootstrap: [AppComponent],
})
export class AppModule {}
