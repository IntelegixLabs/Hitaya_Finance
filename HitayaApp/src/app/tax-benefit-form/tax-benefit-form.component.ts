import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { ITax } from '../tax-interface/ITax';

import { TaxServiceService } from '../tax-services/tax-service/tax-service.service';

@Component({
  selector: 'app-tax-benefit-form',
  templateUrl: './tax-benefit-form.component.html',
  styleUrls: ['./tax-benefit-form.component.scss']
})
export class TaxBenefitFormComponent implements OnInit {

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
  _80c80ccc: string | undefined;
  _80dHipSelf: string | undefined;
  _80dHipParents: string | undefined;
  _80ccd1b: string | undefined;
  _80ccd2: string | undefined;
  _80e: string | undefined;
  _80u: string | undefined;
  _80dd: string | undefined;
  _80ddb: string | undefined;
  _80tta: string | undefined;
  totalYearlyIncome: string | undefined;
  standardDeduction: string | undefined;
  tdsPaid: string | string;
  advanceTaxPaid: string | string;


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
          this.totalYearlyIncome = this.tax_values[0]['totalYearlyIncome'];
          this.standardDeduction = this.tax_values[0]['standardDeduction'];
          this._80c80ccc = this.tax_values[0]['_80c80ccc'];
          this._80dHipSelf = this.tax_values[0]['_80dHipSelf'];
          this._80dHipParents = this.tax_values[0]['_80dHipParents'];
          this._80ccd1b = this.tax_values[0]['_80ccd1b'];
          this._80ccd2 = this.tax_values[0]['_80ccd2'];
          this._80e = this.tax_values[0]['_80e'];
          this._80u = this.tax_values[0]['_80u'];
          this._80dd = this.tax_values[0]['_80dd'];
          this._80ddb = this.tax_values[0]['_80ddb'];
          this._80tta = this.tax_values[0]['_80tta'];
          this.tdsPaid = this.tax_values[0]['tdsPaid'];
          this.advanceTaxPaid = this.tax_values[0]['advanceTaxPaid'];
        }
      }

    );
  }

  ngOnInit(): void {
  }


  submititr6(form: NgForm) {

    console.log("ITR6 Form");

    this.tax_values = { panCard: this.userName, fillingYear: this.itr_filling, fillingStatus: this.itr_status, itrForm: this.itr_itrform, reason: "", taxRegime: "New", totalYearlyIncome: Number(form.value.totalYearlyIncome), standardDeduction: Number(form.value.standardDeduction), _80c80ccc: Number(form.value._80c80ccc), _80dHipSelf: Number(form.value._80dHipSelf), _80dHipParents: Number(form.value._80dHipParents), _80ccd1b: Number(form.value._80ccd1b), _80ccd2: Number(form.value._80ccd2), _80e: Number(form.value._80e), _80u: Number(form.value._80u), _80dd: Number(form.value._80dd), _80ddb: Number(form.value._80ddb), _80tta: Number(form.value._80tta), tdsPaid: Number(form.value.tdsPaid), advanceTaxPaid: Number(form.value.advanceTaxPaid), totalTaxableIncome: 0, taxToBePaidRefunded: 0, formSubmitted: "No", status: "Pending" };

    console.log(this.tax_values);


    this.tax.UpdateTaxInformtion(this.tax_values).subscribe(
      responseLoginStatus => {
        this.status = responseLoginStatus;
        if (this.status == 1) {
          this.router.navigate(['/tax-benefit']);
        }
        else {
          this.msg = this.status + ". Try again with valid Data.";
          alert("invalid");
        }
      },
      () => console.log("ITR6 Form method executed successfully")
    );
  }

}
