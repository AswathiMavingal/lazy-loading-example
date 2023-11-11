import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NotFoundComponent } from './components/not-found/not-found.component';
import {
  HttpClientModule /*, HttpClient, HTTP_INTERCEPTORS */,
} from '@angular/common/http';
// import { EmployeesComponent } from './shared/employees/employees.component';
// import { SharedModule } from './shared/shared.module';
// import { AddEditEmployeeComponent } from './shared/employees/add-edit-employee/add-edit-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotPasswordComponent,
    NotFoundComponent,
    // EmployeesComponent,
    // AddEditEmployeeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule,

    // SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
