import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { ITax } from '../tax-interface/ITax';

import { TaxServiceService } from '../tax-services/tax-service/tax-service.service';

@Component({
  selector: 'app-itr3',
  templateUrl: './itr3.component.html',
  styleUrls: ['./itr3.component.scss']
})
export class Itr3Component implements OnInit {

  userRole: string;
  userName: string;
  fillingYear: string
  userLayout: boolean = false;
  commonLayout: boolean = false;
  status: number;
  errMsg: string;
  msg: string;
  tax_undefined: any;
  tax_values: ITax | undefined;
  itr_filling: string | undefined;
  itr_status: string | undefined;
  itr_itrform: string | undefined;

  constructor(private tax: TaxServiceService, private router: Router) {
    this.userRole = sessionStorage.getItem('userRole');
    this.userName = sessionStorage.getItem('userName');
    this.fillingYear = sessionStorage.getItem('FillingYear');
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

    this.tax.GetUserTaxData(this.userName, this.fillingYear).subscribe(
      responseStatus => {
        this.tax_undefined = responseStatus;
        if (this.tax_undefined.length > 0) {
          this.tax_values = this.tax_undefined
          console.log(this.tax_values);
          this.itr_filling = this.tax_values[0]['fillingYear'];
          this.itr_status = this.tax_values[0]['fillingStatus'];
          this.itr_itrform = this.tax_values[0]['itrForm'];
        }
      }

    );
  }

  ngOnInit(): void {
    
  }

  submititr3(form: NgForm) {

    console.log("ITR3 Form");

    this.tax_values = { panCard: this.userName, fillingYear: this.itr_filling, fillingStatus: this.itr_status, itrForm: this.itr_itrform, reason: "", taxRegime: "New", totalYearlyIncome: 0, standardDeduction: 0, _80c80ccc: 0, _80dHipSelf: 0, _80dHipParents: 0, _80ccd1b: 0, _80ccd2: 0, _80e: 0, _80u: 0, _80dd: 0, _80ddb: 0, _80tta: 0, tdsPaid: 0, advanceTaxPaid: 0, totalTaxableIncome: 0, taxToBePaidRefunded: 0, formSubmitted: "No", status: "Pending" };

    console.log(this.tax_values);


    this.tax.UpdateTaxInformtion(this.tax_values).subscribe(
      responseLoginStatus => {
        this.status = responseLoginStatus;
        if (this.status == 1) {
          this.router.navigate(['/itr4']);
        }
        else {
          this.msg = this.status + ". Try again with valid Data.";
          alert("invalid");
        }
      },
      () => console.log("ITR3 Form method executed successfully")
    );
  }

}
