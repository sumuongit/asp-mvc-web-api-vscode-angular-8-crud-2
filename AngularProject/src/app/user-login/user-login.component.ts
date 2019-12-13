import { Component, OnInit } from '@angular/core';
import { UserLoginService } from '../shared/user-login.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {   

  constructor(private router: Router, private userLoginService: UserLoginService, private toastr: ToastrService) { }
  
  ngOnInit() {
    this.resetForm();    
  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
    this.userLoginService.formData = {      
      Username: '',
      Password: ''
    }
  }

  onSubmit(form: NgForm) {    
      this.userLogin(form);    
  }

  userLogin(form: NgForm){ 
    this.userLoginService.Login(form.value).subscribe(    
      res => {    
        debugger;            
        if(res.Username != null && res.Password != null)    
        {  
          localStorage.setItem('username', res.Username);   
          localStorage.setItem('userid', res.UserId); 
          this.router.navigate(['/customer']); 
        }    
        else{    
          this.toastr.error('Invalid Credentials', 'User Login')    
        }    
      },    
      error => {    
        this.toastr.error('Invalid Credentials', 'User Login')   
      }); 
    }  
}
