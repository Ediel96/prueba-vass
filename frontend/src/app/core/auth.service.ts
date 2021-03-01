import { Injectable } from '@angular/core';
import { HttpClient,  HttpHeaders } from '@angular/common/http';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';
// import { isNullOrUndefined  } from "util";
import { isNullOrUndefined } from 'util';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = environment.urlHttp;
  private httpheader = new HttpHeaders ({
        'Content-type' : 'application/json',
        'Access-Control-Allow-Origin':'*',
        }
      );

  constructor(private http: HttpClient) { }

  getLogin(body:{} ){
    return this.http.post(`${this.url}/users/login`, body, {headers: this.httpheader})
    .pipe(map(data => data));;
  }

  getRegister(body:{} ){
    return this.http.post(`${this.url}api/login`, body, {headers: this.httpheader});
  }

  setUser(user): void {
    user = JSON.stringify(user);
    localStorage.setItem("info_user", user);
  }

  setToken(token):void{
    localStorage.setItem("token_user", token);
  }

  getCurrentUser(){
    let user_string = localStorage.getItem("token_user");
    // user_string = JSON.parse(user_string)
    console.log(user_string)
    if (localStorage.getItem("token_user") != null) {
      return true;
    } else {
      console.log('no se por qeu no me funciona')
      return null;
    }
  }

}
