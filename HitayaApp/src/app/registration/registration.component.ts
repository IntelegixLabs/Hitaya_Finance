import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

import { Router } from '@angular/router';

import { IUserDetail } from '../tax-interface/IUserDetail';

import { UserValidationService } from '../tax-services/user-validation/user-validation.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  siteKey: string;
  status: number;
  errMsg: string;
  msg: string;
  credentials: IUserDetail;

  constructor(private login: UserValidationService, private router: Router) { }

  ngOnInit(): void {
  }

  SignUp(form: NgForm) {

    console.log("registeration-form");

    this.credentials = { panCard: form.value.PanCard, individualTax: form.value.IndividulaTax, firstname: form.value.FirstName, lastname: form.value.LastName, phoneNumber: form.value.PhoneNumber, emailid: form.value.Email, gender: form.value.Gender, dob: form.value.DOB, address: form.value.Address, pin: form.value.Pin, resident: form.value.Resident, password: form.value.Password };

    console.log(this.credentials);

    this.login.signup(this.credentials).subscribe(
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
      () => console.log("SignUp Successfull")
    );
  }

  
}
