import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const AuthGuard: CanActivateFn = (route, state): boolean => {
  const router: Router = inject(Router);
  const auth = inject(AuthService);

  if (auth.isLoggedIn()) {
    const userRole = auth.getRole();
    if (route.data['role'].indexOf(userRole) === -1) {
      router.navigate(['/login']);
      return false;
    }
    return true;
  }
  router.navigate(['login']);
  return false;
  // return auth.isLoggedIn();
};
