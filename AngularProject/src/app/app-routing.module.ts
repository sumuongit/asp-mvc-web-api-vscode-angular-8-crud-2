import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'; 
import { UserLoginComponent } from './user-login/user-login.component';
import { CustomerComponent } from './customers/customer/customer.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { CustomersComponent } from './customers/customers.component';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [    
  {    
    path: '',    
    redirectTo: 'login',    
    pathMatch: 'full',    
  },
  {    
    path: 'login',    
    component: UserLoginComponent,    
    data: {    
      title: 'Login Page'    
    }    
  },    
  {    
    path: 'customer', 
    canActivate : [AuthGuard],   
    component: CustomersComponent,    
    data: {    
      title: 'Customer Page'    
    }    
  },    
  {    
    path: 'register',   
    component: UserRegisterComponent,    
    data: {    
      title: 'Register Page'    
    }    
  },    
];   

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule] 
})
export class AppRoutingModule { }
