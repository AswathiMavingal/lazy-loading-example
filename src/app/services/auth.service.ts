import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  setToken(token: string) {
    if (token) {
      localStorage.setItem('token', token);
    }
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  setRole(role: string) {
    localStorage.setItem('role', role);
  }

  getRole(): string | null {
    return localStorage.getItem('role');
  }
  isLoggedIn(): boolean {
    return this.getToken() !== null;
  }

  login({ email, password, tenant }: any): Observable<any> {
    if (
      (email === 'admin' && password === 'admin' && tenant === 'admin') ||
      (email === 'user' && password === 'user' && tenant === 'user')
    ) {
      this.setToken('hhgdjhsdjfdf');
      this.setRole(tenant);
      return of({
        name: tenant,
        email: `${tenant}@gmail.com`,
        tenant: tenant,
      });
    }
    return throwError(new Error('Failed To Login'));
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    this.router.navigate(['login']);
  }
}
