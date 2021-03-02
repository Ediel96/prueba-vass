import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Elementos importatanes
import { APP_ROUTING } from './app.routes'
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { EmployeeComponent } from './pages/home/employee/employee.component';
import { EditComponent } from './pages/home/employee/edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    EmployeeComponent,
    EditComponent,
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
