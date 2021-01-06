import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import AdminUserDTO from '../dto/AdminUserDTO';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAdminService {


  url = environment.baseURL;

  constructor(private http: HttpClient) { }

  // very important (public)
  public registerUser(userDTO: AdminUserDTO): Observable<any>{ // observable,promises//192.168.8.146
    return this.http.post(this.url + 'adminUser/createAccount', {
      userEmail: userDTO.email,
      userPassword: userDTO.password,
      userName: userDTO.name,
      userContact: userDTO.contact
    });
  }

  public loginUser(email: string, password: string): Observable<any>{
    return this.http.get(this.url + 'adminUser/loginUser', {
      headers: {email, password}
    });
  }
}
