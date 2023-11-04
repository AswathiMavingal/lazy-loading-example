import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  faLock = faLock;
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    tenant: new FormControl('user'),
  });

  constructor(private auth: AuthService, private router: Router) {}
  ngOnInit() {
    if (this.auth.isLoggedIn() && this.auth.getRole() !== null) {
      const role = this.auth.getRole();
      this.router.navigate([role]);
    }
  }

  onSubmit = () => {
    if (this.loginForm.valid) {
      this.auth.login(this.loginForm.value).subscribe(
        (result) => {
          this.router.navigate([`/${result.tenant}`]);
        },
        (error: Error) => {
          alert(error);
        }
      );
    }
  };
}
