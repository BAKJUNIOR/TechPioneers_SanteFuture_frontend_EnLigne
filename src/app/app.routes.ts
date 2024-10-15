import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './views/admin/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { HomeComponent } from './views/patient/home/home.component';
import { AdminComponent } from './layouts/admin/admin.component';
import { ConsultationComponent } from './views/patient/consultation/consultation.component';
import { FormsComponent } from './views/patient/forms/forms.component';
import { LoginComponent } from './views/auth/login/login.component';

export const routes: Routes = [
  // Auth views
  {
    path: 'auth',
    component: LoginComponent,
    children: [{ path: 'login', component: LoginComponent }],
  },
  // Admin views
  {
    path: '',
    component: AdminComponent,
    children: [{ path: '', component: AdminComponent }],
  },

  // Patien views
  {
    path: 'patients',
    // component: HomeComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'consultation', component: ConsultationComponent },
      { path: 'formulaire', component: FormsComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
