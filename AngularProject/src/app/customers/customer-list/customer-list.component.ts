import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/shared/customer.service';
import { Customer } from 'src/app/shared/customer.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  constructor(private customerService: CustomerService, private toastr: ToastrService) { }

  ngOnInit() {
    this.customerService.getCustomerList(Number(JSON.parse(localStorage.getItem('userid'))));
  }

  populateForm(customer: Customer) {
    this.customerService.formData = Object.assign({}, customer);
  }

  onDelete(id: number) {
    if (confirm("Are you sure to delete this record?")) {
      this.customerService.deleteCustomer(id).subscribe(res => {
        this.toastr.warning('Deleted successfully', 'Customer Register')
        this.customerService.getCustomerList(Number(JSON.parse(localStorage.getItem('userid'))));
      });
    }
  }
}
