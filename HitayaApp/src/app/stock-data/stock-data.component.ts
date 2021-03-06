import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { StockDataService } from '../tax-services/stock-data/stock-data.service';

@Component({
  selector: 'app-stock-data',
  templateUrl: './stock-data.component.html',
  styleUrls: ['./stock-data.component.scss']
})
export class StockDataComponent implements OnInit {
  userRole: string;
  userName: string;
  userLayout: boolean = false;
  commonLayout: boolean = false;

  public data: Object[];
  public data_refined: Object[];
  public companyData: any;

  chosenstock: string = "AMZN";
  status: any[];
  msg: string;

  constructor(private stock_data: StockDataService, private router: Router) {
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
    this.getstockdata();
  }

  getstockdata() {
    this.stock_data.StockData(this.chosenstock).subscribe(
      responseDataStatus => {
        this.status = responseDataStatus;
        if (this.status != null) {
          this.data = this.status["Time Series (30min)"];
          this.data_refined = [];
          for (let key in this.data) {
            let value = this.data[key];
            this.data_refined.push({
              time: new Date(key),
              open: Number(value["1. open"]),
              high: Number(value["2. high"]),
              low: Number(value["3. low"]),
              close: Number(value["4. close"]),
              volume: Number(value["5. volume"])
            });


          }
        }
        else {
          this.msg = this.status + ". Try again with valid credentials.";
          alert("invalid");
        }
      },
      () => console.log("Data Fetched Successfull")
    );

    this.stock_data.CompanyOverview(this.chosenstock).subscribe(
      responseDataStatus => {
        this.status = responseDataStatus;
        if (this.status != null) {

          this.companyData = this.status;

          console.log(this.companyData);
        }
        else {
          this.msg = this.status + ". Try again with valid credentials.";
          alert("invalid");
        }
      },
      () => console.log("Data Fetched Successfull")
    );
  }

}
