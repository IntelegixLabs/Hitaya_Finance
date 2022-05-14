import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { IUserDetail } from '../tax-interface/IUserDetail';

import { UserValidationService } from '../tax-services/user-validation/user-validation.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userRole: string;
  userName: string;
  commonLayout: boolean = true;
  status: number;
  errMsg: string;
  msg: string;
  credentials: IUserDetail;

  constructor(private login: UserValidationService, private router: Router) {
    this.userRole = sessionStorage.getItem('userRole');
    this.userName = sessionStorage.getItem('userName');
    
  }

  ngOnInit(): void {
  }


  submitLoginForm(form: NgForm) {

    console.log("Login Form");

    this.credentials = { panCard: form.value.PanCard, individualTax: null, firstname: null, lastname: null, phoneNumber: null, emailid: null, gender: null, dob: null, address: null, pin: null, resident: null, password: form.value.Password  };

    console.log(this.credentials);

    this.login.validateCredentials(this.credentials).subscribe(
      responseLoginStatus => {
        this.status = responseLoginStatus;
        if (this.status == 1) {
          sessionStorage.setItem('userName', form.value.PanCard);
          sessionStorage.setItem('userRole', 'User');


          

          this.router.navigate(['/index']);
        }
        else {
          this.msg = this.status + ". Try again with valid credentials.";
          alert("invalid");
        }
      },
      () => console.log("SubmitLoginForm method executed successfully")
    );
  }


}
