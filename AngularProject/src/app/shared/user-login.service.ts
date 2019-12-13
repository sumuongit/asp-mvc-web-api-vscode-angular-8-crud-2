import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {
  formData: any;
  header: any;
  readonly rootURL = "http://localhost:36348/api/User/";

  constructor(private http: HttpClient) { 
    const headerSettings: {[name: string]: string | string[]; } = {};  
    this.header = new HttpHeaders(headerSettings); 
  }

  Login(formData : any){      
     var a =this.rootURL+ 'UserLogin';  
   return this.http.post<any>(this.rootURL+'UserLogin',formData,{ headers: this.header});  
  }  

  logout() {  
    localStorage.removeItem('username');  
    localStorage.removeItem('userid'); 
  }  
}
