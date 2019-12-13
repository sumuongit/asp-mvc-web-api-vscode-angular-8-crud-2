import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CustomerService } from 'src/app/shared/customer.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(private customerService: CustomerService, private toastr: ToastrService) {

  }

  ngOnInit() {
    this.resetForm();
  } 

  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
    this.customerService.formData = {
      CustomerId: null,
      FullName: '',
      CustomerCode: '',
      MobileNo: '',
      Address: '',
      UserId: null
    }
  }

  onSubmit(form: NgForm) {
    if (form.value.CustomerId == null) {
      this.insertRecord(form);
    }
    else {
      this.updateRecord(form);
    }
  }

  insertRecord(form: NgForm) {    
    this.customerService.postCustomer(form.value).subscribe(res => {
      this.toastr.success('Inserted successfully', 'Customer Register')
      this.resetForm(form);      
      this.customerService.getCustomerList(Number(JSON.parse(localStorage.getItem('userid'))));
    })
  }

  updateRecord(form: NgForm) {
    this.customerService.putCustomer(form.value).subscribe(res => {
      this.toastr.info('Updated successfully', 'Customer Register')
      this.resetForm(form);      
      this.customerService.getCustomerList(Number(JSON.parse(localStorage.getItem('userid'))));
    })
  }

  get userId(): any {
    return Number(JSON.parse(localStorage.getItem('userid')));
  } 
}
