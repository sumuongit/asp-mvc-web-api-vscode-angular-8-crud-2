import { Injectable } from '@angular/core';
import { UserRegister } from './user-register.model';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserRegisterService {
  formData: UserRegister;

  readonly rootURL = "http://localhost:36348/api";

  constructor(private http: HttpClient) { }

  postUser(formData: UserRegister) {
    return this.http.post(this.rootURL + '/User', formData);
  }
}
