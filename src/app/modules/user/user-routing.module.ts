import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoodiesComponent } from './components/goodies/goodies.component';
import { HomeComponent } from './components/home/home.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: UserDashboardComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'goodies', component: GoodiesComponent },
      { path: '', redirectTo: '/user/home', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
