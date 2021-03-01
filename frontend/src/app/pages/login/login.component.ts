import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AuthService} from '../../core/auth.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private loginServ : AuthService , 
          private router : Router) { }
  
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]],
    });

    this.loginServ.getCurrentUser()
    console.log('que paso')
  }

  get f() { return this.registerForm.controls; }
  
  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    this.loginServ.getLogin(this.registerForm.value).
      subscribe( res => { 
            const data = res['token'];
            if(data){
              this.loginServ.setUser(res['user']);
              this.loginServ.setToken(res['token']);
              this.router.navigate(['/home']);
              console.log(res);
          }else{
            this.router.navigate(['/login']);
            console.log(res);
          }
      })

    console.log(this.registerForm.value);
      
  }

}