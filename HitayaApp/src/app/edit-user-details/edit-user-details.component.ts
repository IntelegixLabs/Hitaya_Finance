import { Component, OnInit } from '@angular/core';

import { FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-user-details',
  templateUrl: './edit-user-details.component.html',
  styleUrls: ['./edit-user-details.component.scss']
})
export class EditUserDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  SignUp(form: NgForm) {

    console.log("Sign Up Form ");


  }

}
