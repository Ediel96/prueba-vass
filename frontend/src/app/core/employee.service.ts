import { Injectable } from '@angular/core';
import { HttpClient,  HttpHeaders } from '@angular/common/http';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  url = environment.urlHttp;
  token = localStorage.getItem("token_user");

  private httpheader = new HttpHeaders ({
    'Content-type' : 'application/json',
    'Access-Control-Allow-Origin':'*',
    }
  );

  constructor(private http: HttpClient  ) { }

  getAllEmployeee(){
    let token = localStorage.getItem('token_user')
    const body = ({token_user : token})
    console.log(body);
    return this.http.get(`${this.url}/employee`)
    .pipe(map(data => data));;
  }
}
