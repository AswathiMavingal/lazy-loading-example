import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  // Redirect to 'user' by default
  // Lazy-loaded AdminModule
  { path: 'login', component: LoginComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  {
    path: 'admin',
    canActivate: [AuthGuard],
    data: {
      role: 'admin',
    },
    loadChildren: () =>
      import('./modules/admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'user',
    canActivate: [AuthGuard],
    data: {
      role: 'user',
    },
    loadChildren: () =>
      import('./modules/user/user.module').then((m) => m.UserModule),
  },

  // {
  //   path: 'admin',
  //   loadChildren: () =>
  //     import('./admin/admin.module').then((m) => m.AdminModule),
  // },
  // // Lazy-loaded UserModule
  // {
  //   path: 'user',
  //   loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  // },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
