import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css'],
})
export class NotFoundComponent implements OnInit {
  role = this._auth.getRole();
  constructor(private _auth: AuthService) {}
  ngOnInit() {}
}
