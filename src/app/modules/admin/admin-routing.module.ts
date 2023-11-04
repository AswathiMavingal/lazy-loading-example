import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from 'src/app/components/not-found/not-found.component';
import { AboutComponent } from './components/about/about.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminEmployeesComponent } from './components/admin-employees/admin-employees.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: AdminDashboardComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'employees', component: AdminEmployeesComponent },
      { path: 'about', component: AboutComponent },
      { path: 'contacts', component: ContactsComponent },
      { path: '', redirectTo: '/admin/home', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
