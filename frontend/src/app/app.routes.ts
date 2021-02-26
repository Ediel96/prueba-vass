import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { EmployeeComponent } from './pages/home/employee/employee.component';
// import { BuscadorComponent } from './pages/';

const APP_ROUTES: Routes =[
    { path: '', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: 'employee', component: EmployeeComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'login' }   
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash:false});