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
  incomeSalary: number;
  exemptionsDeductions: number;
  incomeFromInterest: number;
  otherIncome: number;
  interestPaidOnHomeLoan: number;
  rentalIncomeReceived: number;
  interestPaidOnLoan: number;
  incomeFromDigitalAssets: number;

  // Deductions
  basicDeductions: number;
  interestFromDeposits: number;
  medicalInsurance: number;
  donationToCharity: number;
  interestOnEducationalLoans: number;
  interestOnHousingLoan: number;
  employeeContributionNps: number;

  // Others
  standardDeduction: number;
  taxRate: number;
  taxAmount: number;
  totalIncome: number;
  totalDeductions: number;
  oldTax: number;
  newTax: number;
  grossIncome: number;
  income: number;

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
    this.totalIncome = (this.incomeSalary + this.exemptionsDeductions + this.incomeFromInterest + this.otherIncome + this.interestPaidOnHomeLoan + this.rentalIncomeReceived + this.interestPaidOnLoan + this.incomeFromDigitalAssets);

    this.totalDeductions = (this.basicDeductions + this.interestFromDeposits + this.medicalInsurance + this.donationToCharity + this.interestOnEducationalLoans + this.interestOnHousingLoan + this.employeeContributionNps);

    // Calculation in Old Regime
    this.oldTax = this.oldRegimeTaxMethod(this.totalIncome, this.totalDeductions);
    this.newTax = this.newRegimeTaxMethod(this.totalIncome, this.totalDeductions);
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
}
