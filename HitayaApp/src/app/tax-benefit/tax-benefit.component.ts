import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { ITax } from '../tax-interface/ITax';

import { TaxServiceService } from '../tax-services/tax-service/tax-service.service';

@Component({
  selector: 'app-tax-benefit',
  templateUrl: './tax-benefit.component.html',
  styleUrls: ['./tax-benefit.component.scss']
})
export class TaxBenefitComponent implements OnInit {

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
  tdsPaid: string | undefined;
  advanceTaxPaid: string | undefined;
  total_taxable_income: number;
  total_taxable_income_deductions: number;
  tax_payable: number;

  // Profile Details
  fullName: string;
  panNo: string;
  itrNo: string;
  slipNo: string;

  // taxable benefits
  // 1. Deductions
  professionalTax: string;
  totalDeductions: string;

  // 2. Exemptions u/s 10
  hraExemption: string;
  ltaExemption: string;
  ceaExemption: string;
  chaExemption: string;
  transportExemption: string;
  totalExemption: string;

  // 3. Chapter VI-A Deductions
  ccc80Deductions: string;
  hipSelf: string;
  hipParents: string;
  npsSelf: string;
  npsEmployer: string;
  higherEducationLoan: string;
  personDisability: string;
  personDisabilityDependent: string;
  treatmentSpecifiedDisease: string;
  interestSavingsBankAccount: string;
  totalChapterDeduction: string;

  constructor(private tax: TaxServiceService, private router: Router) {
    this.fullName = 'SAYAN SINHA';
    this.panNo = 'JKLFR6783D';
    this.itrNo = '267HGJK89869';
    this.slipNo = '1234567800H';
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

          this.total_taxable_income = Number(this.totalYearlyIncome) - (Number(this.standardDeduction) + 2400 + Number(this.tdsPaid) + Number(this.advanceTaxPaid));
          this.total_taxable_income_deductions = Number(Number(this.total_taxable_income) - Number(this._80c80ccc) - Number(this._80ccd1b) - Number(this._80ccd2) - Number(this._80dHipParents) - Number(this._80dHipSelf) - Number(this._80dd) - Number(this._80ddb) - Number(this._80e) - Number(this._80tta) - Number(this._80u));

          if (this.total_taxable_income_deductions <= 250000) {
            this.tax_payable = 0;
          }
          else if (this.total_taxable_income_deductions >= 250001 && this.total_taxable_income_deductions >= 500000) {
            this.tax_payable = this.total_taxable_income_deductions * 0.05;
          }
          else if (this.total_taxable_income_deductions >= 500001 && this.total_taxable_income_deductions >= 750000) {
            this.tax_payable = 12500 + ((this.total_taxable_income_deductions - 500000) * 0.10);
          }
          else if (this.total_taxable_income_deductions >= 750001 && this.total_taxable_income_deductions >= 1000000) {
            this.tax_payable = 37500 + ((this.total_taxable_income_deductions - 750000) * 0.15);
          }
          else if (this.total_taxable_income_deductions >= 1000001 && this.total_taxable_income_deductions >= 1250000) {
            this.tax_payable = 75000 + ((this.total_taxable_income_deductions - 1000000) * 0.20);
          }
          else if (this.total_taxable_income_deductions >= 1250001 && this.total_taxable_income_deductions >= 1500000) {
            this.tax_payable = 125000 + ((this.total_taxable_income_deductions - 12500000) * 0.25);
          }
          else {
            this.tax_payable = 187500 + ((this.total_taxable_income_deductions - 1500000) * 0.30);
          }


        }

      }
    );

  }

  ngOnInit(): void {
    this.standardDeduction = document.getElementById('standardDeduction').innerHTML;
    this.professionalTax = document.getElementById('professionalTax').innerHTML;
    this.totalDeductions = document.getElementById('totalDeductions').innerHTML;

    this.hraExemption = document.getElementById('hraExemption').innerHTML;
    this.ltaExemption = document.getElementById('ltaExemption').innerHTML;
    this.ceaExemption = document.getElementById('ceaExemption').innerHTML;
    this.chaExemption = document.getElementById('chaExemption').innerHTML;
    this.transportExemption = document.getElementById('transportExemption').innerHTML;
    this.totalExemption = document.getElementById('totalExemption').innerHTML;

    this.ccc80Deductions = document.getElementById('ccc80Deductions').innerHTML;
    this.hipSelf = document.getElementById('hipSelf').innerHTML;
    this.hipParents = document.getElementById('hipParents').innerHTML;
    this.npsSelf = document.getElementById('npsSelf').innerHTML;
    this.npsEmployer = document.getElementById('npsEmployer').innerHTML;
    this.higherEducationLoan = document.getElementById('higherEducationLoan').innerHTML;
    this.personDisability = document.getElementById('personDisability').innerHTML;
    this.personDisabilityDependent = document.getElementById('personDisabilityDependent').innerHTML;
    this.treatmentSpecifiedDisease = document.getElementById('treatmentSpecifiedDisease').innerHTML;
    this.interestSavingsBankAccount = document.getElementById('interestSavingsBankAccount').innerHTML;
    this.totalChapterDeduction = document.getElementById('totalChapterDeduction').innerHTML;
  }

  public generatePDF():void {
      // var pdfObject = jsPDFInvoiceTemplate.default(props);
      // console.log("Object Created: ", pdfObject);
      // window.jsPDF = window.jspdf.jsPDF;

      var doc = new jsPDF({ orientation: 'p', unit: 'mm', format: [210, 297] });

      // Logo / Branding
      doc.setFontSize(24);
      doc.setFont("Helvetica", "bold");
      doc.setTextColor('#0d83dd');
      doc.text("Hitaya Finance", 14, 15);

      // // Top Intersection Line
      // doc.setDrawColor(33, 33, 33);
      // doc.line(12, 20, 198, 20);

      doc.setFontSize(10);
      doc.setFont("Helvetica", "normal");
      // Full Name ----------------------------------------------------
      doc.setTextColor('#333333');
      doc.text("Name :", 14, 30);

      doc.setTextColor('#6E777E');
      doc.text(this.fullName, 26, 30);
      // --------------------------------------------------------------
      // PAN ----------------------------------------------------------
      doc.setTextColor('#333333');
      doc.text("PAN :", 16, 37);

      doc.setTextColor('#6E777E');
      doc.text(this.panNo, 26, 37);
      // --------------------------------------------------------------
      // ITR Form No. -------------------------------------------------
      doc.setTextColor("#333333");
      doc.text("ITR Form No. :", 138, 30);

      doc.setTextColor('#6E777E');
      doc.text(this.itrNo, 164, 30);
      // --------------------------------------------------------------
      // Slip No. -------------------------------------------------
      doc.setTextColor("#333333");
      doc.text("Slip No. :", 147, 37);

      doc.setTextColor('#6E777E');
      doc.text(this.slipNo, 164, 37);
      // --------------------------------------------------------------

      // Top Intersection Line
      doc.setDrawColor('#dee2e6');
      doc.line(12, 42, 198, 42);

      doc.setTextColor("#333333");
      doc.text("Details of TAX Benefits are given below :", 14, 50);

      autoTable(doc, { startY: 46 });
      autoTable(doc, {
        head: [['Deductions', 'Maximum', 'Considered']],
        body: [
          ['Standard Deduction', '50000.00', this.standardDeduction],
          ['Professional Tax', '', this.professionalTax],
          ['Total', '', this.totalDeductions],
        ],
        styles: { fontSize: 8, valign: 'middle' },
        columnStyles: {
          0: { cellWidth: 130, cellPadding: 2 },
          1: { cellWidth: 25, cellPadding: 2 },
          2: { cellWidth: 25, cellPadding: 2 },
        }
      });

      autoTable(doc, { startY: 80 });
      autoTable(doc, {
        head: [['Exemptions u/s 10', 'Maximum', 'Considered']],
        body: [
          ['HRA Exemption', '50000.00', this.hraExemption],
          ['LTA Exemption', '', this.ltaExemption],
          ['CEA Exemption', '', this.ceaExemption],
          ['CHA Exemption', '', this.chaExemption],
          ['Transport Exemption', '', this.transportExemption],
          ['Total', '', this.totalExemption],
        ],
        styles: { fontSize: 8, valign: 'middle' },
        columnStyles: {
          0: { cellWidth: 130, cellPadding: 2 },
          1: { cellWidth: 25, cellPadding: 2 },
          2: { cellWidth: 25, cellPadding: 2 },
        }
      });

      // doc.autoTable({ startY: number = 136 });
      autoTable(doc, {
        head: [['Chapter VI-A Deductions', 'Maximum', 'Considered']],
        body: [
          ['80 C, 80CCC Deductions \n(PF, VPF, PPF, LIC, Tuition Fees, Tax Saving MF, Tax Saving on FDs, SSY, Housing Loan Principal, etc)', '150000.00', this.ccc80Deductions],
          ['80D HIP for self, Spouse, Children', '25000.00', this.hipSelf],
          ['80D HIP for Parents \n(INR 25000 in case of Non- Senior citzen)', '50000.00', this.hipParents],
          ['80CCD (1B) NPS self contribution', '50000.00', this.npsSelf],
          ['80CCD (2) NPS Employer contribution ', '10% of Basic + DA', this.npsEmployer],
          ['80E interest on higher education loan ', '', this.higherEducationLoan],
          ['80U Person with disability \n(40 % INR 75000, 80 % INR 125000)', '125000.00', this.personDisability],
          ['80DD Person with disability dependent \n(40 % INR 75000, 80 % INR 125000)', '125000.00', this.personDisabilityDependent],
          ['80DDB Treatment of Specified Disease Self/Dependent \n(INR 40000 in case of Non- senior citizen)', '100000.00', this.treatmentSpecifiedDisease],
          ['80TTA interest on savings bank account & others', '100000.00', this.interestSavingsBankAccount],
          ['Total', '', this.totalChapterDeduction],
        ],
        styles: { fontSize: 8, valign: 'middle'},
        columnStyles: {
          0: { cellWidth: 130, cellPadding: 2 },
          1: { cellWidth: 25, cellPadding: 2 },
          2: { cellWidth: 25, cellPadding: 2 },
        }
      });

      doc.setTextColor('#6E777E');
      doc.setFontSize(8);
      doc.text("(This slip is computer generated and shows the calculated information as per entered and submitted by the taxpayer)", 14, 276);
      doc.setFontSize(10);
      doc.text("© Hitaya Finance 2022", 14, 282);

      doc.save("output.pdf");
    }
  }
