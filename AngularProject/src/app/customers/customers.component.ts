import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLoginService } from '../shared/user-login.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  constructor(private router: Router, private userLoginService: UserLoginService) { }

  ngOnInit() { }

  logout() {
    this.userLoginService.logout();
    this.router.navigate(['/login']);
  }

  get user(): any {
    return localStorage.getItem('username');
  }
}
