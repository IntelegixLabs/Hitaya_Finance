import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-why-tax',
  templateUrl: './why-tax.component.html',
  styleUrls: ['./why-tax.component.scss']
})
export class WhyTaxComponent implements OnInit {
  userRole: string;
  userName: string;
  userLayout: boolean = false;
  commonLayout: boolean = false;

  constructor(private router: Router) {
    this.userRole = sessionStorage.getItem('userRole');
    this.userName = sessionStorage.getItem('userName');
    console.log(this.userName);
    if (this.userName != null) {
      this.userLayout = true;
    }
    else {
      if (this.userRole == "Admin") {
        this.userLayout = true;
      }
      else {
        this.commonLayout = true;
      }
    }
  }

  ngOnInit(): void {
  }

}
