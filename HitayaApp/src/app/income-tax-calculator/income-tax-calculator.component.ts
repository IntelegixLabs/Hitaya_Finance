import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-income-tax-calculator',
  templateUrl: './income-tax-calculator.component.html',
  styleUrls: ['./income-tax-calculator.component.scss']
})
export class IncomeTaxCalculatorComponent implements OnInit {

  userRole: string;
  userName: string;
  userLayout: boolean = false;
  commonLayout: boolean = false;

  // Income Details
  incomeSalary: number = 0;
  exemptionsDeductions: number = 0;
  incomeFromInterest: number = 0;
  otherIncome: number = 0;
  interestPaidOnHomeLoan: number = 0;
  rentalIncomeReceived: number = 0;
  interestPaidOnLoan: number = 0;
  incomeFromDigitalAssets: number = 0;

  // Deductions
  basicDeductions: number = 0;
  interestFromDeposits: number = 0;
  medicalInsurance: number = 0;
  donationToCharity: number = 0;
  interestOnEducationalLoans: number = 0;
  interestOnHousingLoan: number = 0;
  employeeContributionNps: number = 0;

  // Others
  standardDeduction: number = 0;
  taxRate: number = 0;
  taxAmount: number = 0;
  totalIncome: number = 0;
  totalDeductions: number = 0;
  oldTax: number = 0;
  newTax: number = 0;
  grossIncome: number = 0;
  income: number = 0;

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

  public calculateTax(): void {
    this.totalIncome = (this.incomeSalary - this.exemptionsDeductions + this.incomeFromInterest + this.otherIncome + this.interestPaidOnHomeLoan + this.rentalIncomeReceived + this.interestPaidOnLoan + this.incomeFromDigitalAssets);

    this.totalDeductions = (this.basicDeductions + this.interestFromDeposits + this.medicalInsurance + this.donationToCharity + this.interestOnEducationalLoans + this.interestOnHousingLoan + this.employeeContributionNps);

    // Calculation in Old Regime
    this.oldTax = this.oldRegimeTaxMethod(this.totalIncome, this.totalDeductions);
    this.newTax = this.newRegimeTaxMethod(this.totalIncome, this.totalDeductions);

    // this.switchTab(); // switching the tab to calulate tab
  }

  public oldRegimeTaxMethod(totalIncome: number, totalDeductions: number): number {
    this.standardDeduction = 50000;

    this.taxRate = 0;
    this.taxAmount = 0;

    this.grossIncome = totalIncome - this.standardDeduction;
    this.income = this.grossIncome - totalDeductions;

    if (this.income > 249999 && this.income < 500000) this.taxRate = 5;
    else if (this.income > 500000 && this.income < 1000000) this.taxRate = 20;
    else if (this.income > 1000000) this.taxRate = 30;

    if (this.taxRate !== 0) this.taxAmount = (this.income * (this.taxRate / 100));

    return this.taxAmount;
  }

  public newRegimeTaxMethod(totalIncome: number, totalDeductions: number): number {
    this.standardDeduction = 0;

    this.taxRate = 0;
    this.taxAmount = 0;

    this.grossIncome = totalIncome - this.standardDeduction;
    this.income = this.grossIncome - totalDeductions;

    if (this.income > 249999 && this.income < 500000) this.taxRate = 5;
    else if (this.income > 500000 && this.income < 750000) this.taxRate = 10;
    else if (this.income > 750000 && this.income < 1000000) this.taxRate = 15;
    else if (this.income > 1000000 && this.income < 1250000) this.taxRate = 20;
    else if (this.income > 1250000 && this.income < 1500000) this.taxRate = 30;

    if (this.taxRate !== 0) {
      this.taxAmount = this.income * (this.taxRate / 100);
    }

    return this.taxAmount;
  }

  // public switchTab() {
  //   let i: any = 0;
  //   let el: any = document.getElementsByClassName("nav-link");
  //   for (i = 0; i < el.length; i++) {
  //     el[i].classList.remove('active');
  //   }

  //   let el2: any = document.getElementsByClassName("tab-pane");
  //   for (i = 0; i < el2.length; i++) {
  //     el2[i].classList.remove('active');
  //   }

  //   document.getElementById('calculate-tab').classList.add('active');
  //   document.getElementById('calculate-tab-pane').classList.add('show');
  //   document.getElementById('calculate-tab-pane').classList.add('active');
  // }
}
