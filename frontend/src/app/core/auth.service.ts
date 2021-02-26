import { Injectable } from '@angular/core';
import { HttpClient,  HttpHeaders } from '@angular/common/http';
import {environment} from '../../environments/environment'

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
    return this.http.post(`${this.url}/users/login`, body, {headers: this.httpheader});
  }

  getRegister(body:{} ){
    return this.http.post(`${this.url}api/login`, body, {headers: this.httpheader});
  }

}
