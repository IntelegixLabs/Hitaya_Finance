import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})

export class WalletComponent implements OnInit {

  userName: string;
  userLayout: boolean = false;
  commonLayout: boolean = false;

  recive: boolean = false;
  send: boolean = false;
  buy: boolean = false;
  swap: boolean = false;
  add_contacts: boolean = false;

  hat_balance: any = 0;

  listtransaction = [];

  public myAngularxQrCode: string = null;


  formSubmitted = false;
  user: any;

  contact_list = [];

  curr_user_name: String = "UnRegistered";

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  addcontact() {
    if (this.add_contacts == false) {
      this.add_contacts = true;
    }
    else {
      this.add_contacts = false;
    }

  }

  ReciveQr() {
    if (this.recive == true) {
      this.recive = false;
    }
    else {
      this.recive = true;
      this.send = false;
      this.buy = false;
      this.swap = false;
    }
  }

  sendtoken() {
    if (this.send == true) {
      this.send = false;
    }
    else {
      this.send = true;
      this.recive = false;
      this.buy = false;
      this.swap = false;
    }

  }

  buytoken() {
    if (this.buy == true) {
      this.buy = false;
    }
    else {
      this.buy = true;
      this.send = false;
      this.recive = false;
      this.swap = false;
    }

  }

  swaptoken() {
    if (this.swap == true) {
      this.swap = false;
    }
    else {
      this.swap = true;
      this.send = false;
      this.buy = false;
      this.recive = false;
    }

  }




  createForms() {
    console.log("Create Forms");
  }

  getAccountAndBalance = () => {
    console.log("Get Account Balance");
  }



  getContacts = () => {
    console.log("Get Contacts");
  }

  gettransaction = () => {
    console.log("Get Transactions");
  }

  submitTransferForm(form: NgForm) {
    console.log('Transfer Form');
    var transfer = { sender: this.user.address, reciver: form.value.crypto, amount: form.value.amount };
    console.log(transfer);
  }


  burn(form: NgForm) {
    console.log('burn form');
  }



  SubmitAddContact(form: NgForm) {
    console.log("Add Contact Fuction Started");
  }


  getusername = () => {
    console.log('Get User Name');
  }

}
