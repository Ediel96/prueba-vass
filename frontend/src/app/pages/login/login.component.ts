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
  }

  get f() { return this.registerForm.controls; }
  
  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    this.loginServ.getLogin(this.registerForm.value).
      subscribe( res => {
        if(res['error'] != null){
            this.router.navigate(['/home']);
            console.log('paso');
          }else{
            this.router.navigate(['/login']);
            console.log('no paso');
          }
      })

    console.log(this.registerForm.value);
      
  }

}