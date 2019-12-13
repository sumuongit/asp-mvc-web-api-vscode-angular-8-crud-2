import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserRegisterService } from '../shared/user-register.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  
  constructor(private userRegisterService: UserRegisterService, private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();    
  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
    this.userRegisterService.formData = {
      UserId: null,
      Username: '',
      Email: '',
      Password: ''
    }
  }

  onSubmit(form: NgForm) {    
      this.insertUser(form);    
  };

  insertUser(form: NgForm){
    this.userRegisterService.postUser(form.value).subscribe(res => {
      this.toastr.success('Inserted successfully', 'User Register')      
      this.resetForm();   
    })
  }
}
