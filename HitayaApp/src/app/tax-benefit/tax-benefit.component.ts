import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

@Component({
  selector: 'app-tax-benefit',
  templateUrl: './tax-benefit.component.html',
  styleUrls: ['./tax-benefit.component.scss']
})
export class TaxBenefitComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
      doc.text("SAYAN SINHA", 26, 30);
      // --------------------------------------------------------------
      // PAN ----------------------------------------------------------
      doc.setTextColor('#333333');
      doc.text("PAN :", 16, 37);

      doc.setTextColor('#6E777E');
      doc.text("JHPKS6749Y", 26, 37);
      // --------------------------------------------------------------
      // ITR Form No. -------------------------------------------------
      doc.setTextColor("#333333");
      doc.text("ITR Form No. :", 138, 30);

      doc.setTextColor('#6E777E');
      doc.text("267HGJK89869", 164, 30);
      // --------------------------------------------------------------
      // Slip No. -------------------------------------------------
      doc.setTextColor("#333333");
      doc.text("Slip No. :", 147, 37);

      doc.setTextColor('#6E777E');
      doc.text("267HGJK89869", 164, 37);
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
          ['Standard Deduction', '50000.00', '50000.00'],
          ['Professional Tax', '', '2400.00'],
          ['Total', '', '52400.00'],
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
          ['HRA Exemption', '50000.00', '50000.00'],
          ['LTA Exemption', '', '0.00'],
          ['CEA Exemption', '', '0.00'],
          ['CHA Exemption', '', '0.00'],
          ['Transport Exemption', '', '0.00'],
          ['Total', '', '52400.00'],
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
          ['80 C, 80CCC Deductions \n(PF, VPF, PPF, LIC, Tuition Fees, Tax Saving MF, Tax Saving on FDs, SSY, Housing Loan Principal, etc)', '150000.00', '32512.00'],
          ['80D HIP for self, Spouse, Children', '25000.00', '0.00'],
          ['80D HIP for Parents \n(INR 25000 in case of Non- Senior citzen)', '50000.00', '0.00'],
          ['80CCD (1B) NPS self contribution', '50000.00', '0.00'],
          ['80CCD (2) NPS Employer contribution ', '10% of Basic + DA', '0.00'],
          ['80E interest on higher education loan ', '', '0.00'],
          ['80U Person with disability \n(40 % INR 75000, 80 % INR 125000)', '125000.00', '0.00'],
          ['80DD Person with disability dependent \n(40 % INR 75000, 80 % INR 125000)', '125000.00', '0.00'],
          ['80DDB Treatment of Specified Disease Self/Dependent \n(INR 40000 in case of Non- senior citizen)', '100000.00', '0.00'],
          ['80TTA interest on savings bank account & others', '100000.00', '0.00'],
          ['Total', '', '32512.00'],
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
      doc.text("(This slip is computer generated and guarantees the information as entered by user)", 14, 276);
      doc.setFontSize(10);
      doc.text("© Hitaya Finance 2022", 14, 282);

      doc.save("output.pdf");
    }
  }
