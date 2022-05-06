import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSelectFile(event) { 
    console.log("OnSelect File");
  }

 
  getAccountAndBalance = () => {
    console.log("Get Account Balance");
  }


  SubmitSignUpForm(form: NgForm) {
    console.log("SubmitSignUpForm");
  }


  submitLoginForm(form: NgForm) {
    console.log("SubmitLoginForm");
  }
}
